const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const createManyCategory = async () => {
  try {
    return await prisma.category.createMany({
      data: [
        { name: "Start Up" },
        { name: "Freelance" },
        { name: "Méthodes agiles" },
        { name: "Cyber Sécurité" },
        { name: "Data" },
        { name: "IA" },
        { name: "Machine Learning & Deep Learning" },
        { name: "RGPD" },
        { name: "UX/UI Design" },
        { name: "No Code" },
        { name: "PHP" },
        { name: "JavaScript" },
        { name: "Angular" },
        { name: "SEO" },
        { name: "BlockChain" },
      ],
      skipDuplicates: true,
    });
  } finally {
    await prisma.$disconnect();
  }
};

createManyCategory();
