const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.getAll = async () => {
  try {
    return await prisma.photo.findMany();
  } finally {
    await prisma.$disconnect();
  }
};

exports.createOne = async (file, body) => {
  try {
    return await prisma.masterclass.create({
      data: {
        name: body.name,
        source: file.filename,
        description: body.description,
        author: {
          connectOrCreate: {
            where: {
              firstname: body.firstname,
              lastname: body.lastname,
              speciality: body.speciality,
              photo: {
                connectOrCreate: {
                  where: {
                    name: body.name,
                    source: body.source,
                  },
                  create: {
                    name: body.name,
                    source: body.source,
                  },
                },
              },
            },
            create: {
              firstname: body.firstname,
              lastname: body.lastname,
              speciality: body.speciality,
              photo: {
                connectOrCreate: {
                  where: {
                    name: body.name,
                    source: body.source,
                  },
                  create: {
                    name: body.name,
                    source: body.source,
                  },
                },
              },
            },
          },
        },
        category: {
          connectOrCreate: {
            where: {
              name: body.name,
            },
            create: {
              name: body.name,
            },
          },
        },
        keyword: {
          connectOrCreate: {
            where: {
              name: body.name,
            },
            create: {
              name: body.name,
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
