const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.getAll = async () => {
  try {
    return await prisma.masterclass.findMany({
      include: {
        entreprise: true,
        category: true,
        keywords: true,
      },
    });
  } finally {
    await prisma.$disconnect();
  }
};

// const keywordsFormated = bodyText.keyword.split(",").map((word) => ({
//   keyword: {
//     connectOrCreate: {
//       where: { name: word },
//       create: { name: word },
//     },
//   },
// }));

exports.createOne = async (masterclass, file) => {
  const keywordsFormated = masterclass[6].split(",").map((word) => ({
    keyword: {
      connectOrCreate: {
        where: { name: word },
        create: { name: word },
      },
    },
  }));

  try {
    return await prisma.masterclass.create({
      data: {
        title: masterclass[0],
        description: masterclass[3],
        source: masterclass[2],
        category: {
          connectOrCreate: {
            where: { name: masterclass[4] },
            create: { name: masterclass[4] },
          },
        },
        keywords: {
          create: keywordsFormated,
        },
        entreprise: {
          connectOrCreate: {
            where: { name: masterclass[1] },
            create: {
              name: masterclass[1],
              speciality: masterclass[4],
              logo_name: file.filename,
              logo_source: file.destination,
            },
          },
        },
      },
    });
    // eslint-disable-next-line no-useless-catch
  } catch (e) {
    throw e;
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
