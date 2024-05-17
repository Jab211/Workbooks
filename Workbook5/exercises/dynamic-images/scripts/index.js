"use strict";
let imageFiles = [
  {
    id: "1",
    path: "https://placehold.co/300x300",
    description: "placeholder 1",
  },
  {
    id: "2",
    path: "https://placehold.co/300x300",
    description: "placeholder 2",
  },
  {
    id: "3",
    path: "https://placehold.co/300x300",
    description: "placeholder 3",
  },
  {
    id: "4",
    path: "https://placehold.co/300x300",
    description: "placeholder 4",
  },
  {
    id: "5",
    path: "https://placehold.co/300x300",
    description: "placeholder 5",
  },
  {
    id: "6",
    path: "https://placehold.co/300x300",
    description: "placeholder 6",
  },
  {
    id: "7",
    path: "https://placehold.co/300x300",
    description: "placeholder 7",
  },
  {
    id: "8",
    path: "https://placehold.co/300x300",
    description: "placeholder 8",
  },
  {
    id: "9",
    path: "https://placehold.co/300x300",
    description: "placeholder 9",
  },
  {
    id: "10",
    path: "https://placehold.co/200x300",
    description: "placeholder 10",
  },
];

window.onload = function () {
  //get all html elements into variables

  let imagesSelect = document.querySelector("#imagesSelect");
  let imagesContainer = document.querySelector("#imagesContainer");
  let addImageButton = document.querySelector("#addImageButton");
  let clearImageButton = document.querySelector("#clearImageButton");
//   let imagesSelect = imageFiles.value;
  function loadImagesSelect() {

    for (const imageFile of imageFiles) {
      let option = document.createElement("option");
      option.value = imageFile.id;
      option.innerText = imageFile.description;
      imagesSelect.appendChild(option)
    }
  }

  //define  your functions
  function addImage() {
    // Figure out value(value is the id) is selected in the select and put that into a variable
    // use find on the images files array to find the image file object with that id that is put into the variable
    let imageFile = imageFiles[9]; //find

    let image = document.createElement("img");
    image.src = imageFile.path;
    image.alt = imageFile.description;
    imagesContainer.appendChild(image);
  }
  function clearImage() {}
  //associate your functions with html element events
  //   element.event = function
  addImageButton.onclick = addImage;
  clearImageButton.onclick = clearImage;
  //   imagesSelect.onchange = addImage
  loadImagesSelect();
};
