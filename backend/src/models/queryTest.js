const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const bodyText = {
  title: "title",
  name: "name",
  source: "youtube",
  desc: "description",
  category: "spec",
  theme: "theme",
  keyword: "toto,tata,tutu",
  entreprise: "wild",
};

const keywordsFormated = bodyText.keyword.split(",").map((word) => ({
  keyword: {
    connectOrCreate: {
      where: { name: word },
      create: { name: word },
    },
  },
}));

const file = {
  fieldname: "file",
  originalname: "Photo cv.jpeg",
  encoding: "7bit",
  mimetype: "image/jpeg",
  destination:
    "/Users/sylvainleguay/Desktop/WildCodeSchool/Projet 3/2022-03-JS-RemoteFR-TeamKarma-P3-Inspiraction/backend/public/data/uploads",
  filename: "Photo_cv.jpeg1656411912729.jpeg",
  path: "/Users/sylvainleguay/Desktop/WildCodeSchool/Projet 3/2022-03-JS-RemoteFR-TeamKarma-P3-Inspiraction/backend/public/data/uploads/Photo_cv.jpeg1656411912729.jpeg",
  size: 194096,
};

const createOne = async () => {
  try {
    return await prisma.masterclass.create({
      data: {
        title: bodyText.title,
        description: bodyText.desc,
        source: bodyText.source,
        category: {
          connectOrCreate: {
            where: { name: bodyText.category },
            create: { name: bodyText.category },
          },
        },
        keywords: {
          create: keywordsFormated,
        },
        entreprise: {
          connectOrCreate: {
            where: { name: bodyText.entreprise },
            create: {
              name: bodyText.entreprise,
              speciality: "...",
              logo_name: "...",
              logo_source: file.filename,
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

createOne();
