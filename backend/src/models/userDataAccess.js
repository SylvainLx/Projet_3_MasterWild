const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.findAll = async () => {
  try {
    return await prisma.user.findMany();
  } finally {
    await prisma.$disconnect();
  }
};

exports.findOne = async (id) => {
  try {
    return await prisma.user.findUnique({
      where: { Id: id },
    });
  } finally {
    await prisma.$disconnect();
  }
};

// exports.createOne = async (firstname, lastname, email, hash) => {
//   try {
//     return await prisma.photo.create({
//       firstname,
//       lastname,
//       email,
//       password: hash,
//     });
//   } finally {
//     await prisma.$disconnect();
//   }
// };

// exports.deleteOne = async (id) => {
//   try {
//     return await prisma.photo.delete({
//       where: { id },
//     });
//   } finally {
//     await prisma.$disconnect();
//   }
// };
