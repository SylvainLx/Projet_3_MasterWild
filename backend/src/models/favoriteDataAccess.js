const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.findFavorite = async (userId) => {
  try {
    return await prisma.favorite.findMany({
      where: { user_Id: userId },
    });
  } finally {
    await prisma.$disconnect();
  }
};

exports.createOne = async (userId, masterclassId) => {
  try {
    return await prisma.favorite.create({
      data: {
        user_Id: userId,
        masterclass_Id: masterclassId,
      },
    });
  } finally {
    await prisma.$disconnect();
  }
};

exports.removeOne = async (userId, masterclassId) => {
  try {
    return await prisma.favorite.delete({
      where: {
        user_Id_masterclass_Id: {
          user_Id: userId,
          masterclass_Id: masterclassId,
        },
      },
    });
  } finally {
    await prisma.$disconnect();
  }
};
