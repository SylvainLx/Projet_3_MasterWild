const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.getAll = async () => {
  try {
    return await prisma.photo.findMany();
  } finally {
    await prisma.$disconnect();
  }
};

exports.createOne = async (masterclass) => {
  try {
    return await prisma.masterclass.create({
      data: {
        name: masterclass[0],
        source: masterclass.filename,
        description: masterclass[6],
        author: {
          connectOrCreate: {
            where: {
              firstname: masterclass[1].firstname,
              lastname: masterclass[2].lastname,
              speciality: masterclass[7].speciality,
              photo: {
                connectOrCreate: {
                  where: {
                    name: masterclass[0].name,
                    source: masterclass[3].source,
                  },
                  create: {
                    name: masterclass[0].name,
                    source: masterclass[3].source,
                  },
                },
              },
            },
            create: {
              firstname: masterclass[1].firstname,
              lastname: masterclass[2].lastname,
              speciality: masterclass[6].speciality,
              photo: {
                connectOrCreate: {
                  where: {
                    name: masterclass.name,
                    source: masterclass.source,
                  },
                  create: {
                    name: masterclass.name,
                    source: masterclass.source,
                  },
                },
              },
            },
          },
        },
        category: {
          connectOrCreate: {
            where: {
              name: masterclass.name,
            },
            create: {
              name: masterclass.name,
            },
          },
        },
        keyword: {
          connectOrCreate: {
            where: {
              name: masterclass[5].name,
            },
            create: {
              name: masterclass[5].name,
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
