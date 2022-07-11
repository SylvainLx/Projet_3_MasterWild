const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.getAll = async () => {
  try {
    return await prisma.entreprise.findMany();
  } finally {
    await prisma.$disconnect();
  }
};

exports.getOne = async (Id) => {
  try {
    return await prisma.entreprise.findUnique({
      where: { Id: parseInt(Id, 10) },
    });
  } finally {
    await prisma.$disconnect();
  }
};

exports.deleteOne = async (Id) => {
  try {
    return await prisma.entreprise.delete({
      where: { Id: parseInt(Id, 10) },
    });
  } finally {
    await prisma.$disconnect();
  }
};
