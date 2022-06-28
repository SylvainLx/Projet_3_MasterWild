const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.getAll = async () => {
  try {
    return await prisma.category.findMany();
  } finally {
    await prisma.$disconnect();
  }
};

exports.createOne = async (masterclass, file) => {
  try {
    await prisma.masterclass.create({
      data: {
        title: masterclass[0],
        source: masterclass[2],
        description: masterclass[3],
        entreprise: {
          connectOrCreate: {
            where: {
              name: masterclass[1],
              speciality: masterclass[5],
              logo_source: file.filename,
              logo_name: masterclass[1],
            },
            create: {
              name: masterclass[1],
              speciality: masterclass[5],
              logo_source: file.filename,
              logo_name: masterclass[1],
            },
          },
        },
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
