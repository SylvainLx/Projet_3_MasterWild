const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.getAll = async () => {
  try {
    return await prisma.photo.findMany();
  } finally {
    await prisma.$disconnect();
  }
};

exports.createOne = async (file) => {
  try {
    return await prisma.photo.create({
      data: {
        source: file.filename,
      },
    });
  } finally {
    await prisma.$disconnect();
  }
};

exports.deleteOne = async (id) => {
  try {
    return await prisma.photo.delete({
      where: { id },
    });
  } finally {
    await prisma.$disconnect();
  }
};
