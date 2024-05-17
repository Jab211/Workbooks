" use strict";

let menus = {
  drinks: ["Water", "Tea", "Sweet Tea", "Coke", "Dr. Pepper", "Sprite"],
  entrees: [
    "Hamburger w/ Fries",
    "Grilled Cheese w/ Tater Tots",
    "Grilled Chicken w/ Veggies",
    "Chicken Fried Steak w/ Mashed Potatoes",
    "Fried Shrimp w/ Coleslaw",
    "Veggie Plate",
  ],
  desserts: ["Cheesecake", "Chocolate Cake", "Snickerdoodle Cookie"],
};

const categoryList = document.getElementById("categoryList");
const itemList = document.getElementById("itemList");

function onCategoryChange() {
    const category = categoryList.value

    console.log(category);

    itemList.options.length = 0;
    for (const menuItem of menus[category]) {
        const option = document.createElement("option");
        option.value = menuItem;
        option.innerText = menuItem;
        itemList.appendChild(option);

      }
}

function init() {
  categoryList.onchange = onCategoryChange


}

window.onload = init;
