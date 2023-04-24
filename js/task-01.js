const categoriesTitles = document.querySelectorAll(".item");
console.log("Number of categories: ", categoriesTitles.length);

categoriesTitles.forEach((item) => {
  const categoryName = item.querySelectorAll("h2").textContent;
  const categoryElements = item.querySelectorAll("li").length;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements}`);
});
