const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.getAll = async () => {
  try {
    return await prisma.masterclass.findMany({
      include: {
        entreprise: true,
        category: true,
        keywords: { include: { keyword: true } },
      },
    });
  } finally {
    await prisma.$disconnect();
  }
};

exports.getOneKeyword = async (Id) => {
  try {
    return await prisma.keyword.findUnique({
      where: { Id: parseInt(Id, 10) },
    });
  } finally {
    await prisma.$disconnect();
  }
};

exports.getAllKeyword = async () => {
  try {
    return await prisma.keyword.findMany();
  } finally {
    await prisma.$disconnect();
  }
};

exports.getOne = async (Id) => {
  try {
    return await prisma.masterclass.findUnique({
      where: { Id: parseInt(Id, 10) },
      include: {
        entreprise: true,
        category: true,
        keywords: { include: { keyword: true } },
      },
    });
  } finally {
    await prisma.$disconnect();
  }
};

exports.createOne = async (masterclass, file) => {
  const keywordsFormated = masterclass.keyword.split(",").map((word) => ({
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
        title: masterclass.title,
        description: masterclass.description,
        source: masterclass.source,
        category: {
          connectOrCreate: {
            where: { name: masterclass.theme },
            create: { name: masterclass.theme },
          },
        },
        keywords: {
          create: keywordsFormated,
        },
        entreprise: {
          connectOrCreate: {
            where: { name: masterclass.name },
            create: {
              name: masterclass.name,
              speciality: masterclass.speciality,
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

exports.editOne = async (id, masterclass) => {
  const keywordsFormated = masterclass.keyword.split(",").map((word) => ({
    keyword: {
      connectOrCreate: {
        where: { name: word },
        create: { name: word },
      },
    },
  }));
  try {
    return await prisma.masterclass.upsert({
      where: { Id: parseInt(id, 10) },
      update: {
        title: masterclass.title,
        description: masterclass.description,
        source: masterclass.source,
        category: {
          connectOrCreate: {
            where: { name: masterclass.theme },
            create: { name: masterclass.theme },
          },
        },
        keywords: {
          deleteMany: {},
          create: keywordsFormated,
        },
      },
      create: {
        title: masterclass.title,
        description: masterclass.description,
        source: masterclass.source,
        category: {
          connectOrCreate: {
            where: { name: masterclass.theme },
            create: { name: masterclass.theme },
          },
        },
        keywords: {
          create: keywordsFormated,
        },
      },
    });
  } finally {
    await prisma.$disconnect();
  }
};

exports.deleteOne = async (Id) => {
  try {
    return await prisma.masterclass.delete({
      where: { Id: parseInt(Id, 10) },
    });
  } finally {
    await prisma.$disconnect();
  }
};
