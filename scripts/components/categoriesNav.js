const categoriesNav = (categories) => {
  return {
    render: () => {
      return `<div class = "categories-container flex-al-ja">${categories
        .map((category) => `<div class = "category-container" id = ${category.id}>${category.name}</div>`)
        .join("")}</div>`;
    },
  };
};
export default categoriesNav;
