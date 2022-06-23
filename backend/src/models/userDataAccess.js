const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.findAll = async () => {
  try {
    return await prisma.user.findMany();
  } finally {
    await prisma.$disconnect();
  }
};

exports.findOne = async (id) => {
  try {
    return await prisma.user.findUnique({
      where: { Id: id },
    });
  } finally {
    await prisma.$disconnect();
  }
};

exports.createOne = async (newUser) => {
  try {
    return await prisma.user.create({
      data: {
        firstname: newUser.firstname,
        lastname: newUser.lastname,
        email: newUser.email,
        password: newUser.hash,
      },
    });
  } finally {
    await prisma.$disconnect();
  }
};

exports.removeOne = async (id) => {
  try {
    return await prisma.user.delete({
      where: { Id: id },
    });
  } finally {
    await prisma.$disconnect();
  }
};

exports.modifyOne = async (userId, user) => {
  try {
    return await prisma.user.update({
      where: { Id: userId },
      data: user,
    });
  } finally {
    await prisma.$disconnect();
  }
};
