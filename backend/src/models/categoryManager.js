const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.createOne = async (category) => {
  try {
    await prisma.category.create({
      data: {
        connectOrCreate: {
          where: {
            name: category.name,
          },
          create: {
            name: category.name,
          },
        },
      },
    });
  } finally {
    await prisma.$disconnect();
  }
};
