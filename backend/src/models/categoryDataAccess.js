const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.createOne = async (data) => {
  try {
    return await prisma.category.create({
      data: { ...data },
    });
  } finally {
    await prisma.$disconnect();
  }
};

exports.getAll = async () => {
  try {
    return await prisma.category.findMany();
  } finally {
    await prisma.$disconnect();
  }
};

exports.getOne = async (Id) => {
  try {
    return await prisma.category.findUnique({
      where: { Id: parseInt(Id, 10) },
    });
  } finally {
    await prisma.$disconnect();
  }
};

exports.deleteOne = async (Id) => {
  try {
    return await prisma.category.delete({
      where: { Id: parseInt(Id, 10) },
    });
  } finally {
    await prisma.$disconnect();
  }
};
