const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.getAll = async () => {
  try {
    return await prisma.file_uploaded.findMany();
  } catch (e) {
    throw e;
  } finally {
    await prisma.$disconnect();
  }
};

exports.createOne = async (img) => {
  try {
    return await prisma.file_uploaded.create({
      data: img,
    });
  } catch (e) {
    throw e;
  } finally {
    await prisma.$disconnect();
  }
};

exports.deleteOne = async (id) => {
  try {
    return await prisma.file_uploaded.delete({
      where: { id },
    });
  } catch (e) {
    throw e;
  } finally {
    await prisma.$disconnect();
  }
};
