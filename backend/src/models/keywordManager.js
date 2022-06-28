const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.createOne = async (keyword) => {
  try {
    await prisma.keyword.create({
      data: {
        keyword: {
          connectOrCreate: {
            where: {
              name: keyword[0],
            },
            create: {
              name: keyword[0],
            },
          },
        },
      },
    });
  } finally {
    await prisma.$disconnect();
  }
};
