const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const purgeDB = async () => {
  const masterclasses = await prisma.masterclass.findMany({});
  const entreprises = await prisma.entreprise.findMany({});
  const categories = await prisma.category.findMany({});
  const keywords = await prisma.keyword.findMany({});

  const deleteMasterclass = async (masterclass) => {
    return prisma.masterclass.delete({
      where: { Id: masterclass.Id },
    });
  };

  const deleteEntreprise = async (entreprise) => {
    return prisma.entreprise.delete({
      where: { Id: entreprise.Id },
    });
  };

  const deleteCategory = async (category) => {
    return prisma.category.delete({
      where: { Id: category.Id },
    });
  };

  const deleteKeyword = async (keyword) => {
    return prisma.keyword.delete({
      where: { Id: keyword.Id },
    });
  };

  const deleteMasterclasses = async () => {
    return Promise.all(
      masterclasses.map((masterclass) => deleteMasterclass(masterclass))
    );
  };

  const deleteEntreprises = async () => {
    return Promise.all(
      entreprises.map((entreprise) => deleteEntreprise(entreprise))
    );
  };

  const deleteCategories = async () => {
    return Promise.all(categories.map((category) => deleteCategory(category)));
  };

  const deleteKeywords = async () => {
    return Promise.all(keywords.map((keyword) => deleteKeyword(keyword)));
  };

  await deleteCategories();
  await deleteKeywords();
  await deleteEntreprises();
  await deleteMasterclasses();
};

purgeDB();
