const categoriesList = document.getElementById('categories');
const categoriesTitles = categoriesList.children;
console.log('Number of categories: ', categoriesTitles.length);

[...categoriesTitles].forEach(item => {
  const categoryName = item.firstElementChild.textContent;
  const categoryElements = item.lastElementChild.children;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements.length}`);
});
