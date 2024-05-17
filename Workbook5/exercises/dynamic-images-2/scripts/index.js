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
    //the variable names should always end with what kind of HTML Element is being put into the variable
    const imageFileDropdown = document.querySelector("#imageFileDropdown"); //# means id
    const addImageButton = document.querySelector("#addImageButton");
    const clearImagesButton = document.querySelector("#clearImagesButton");
    const imageContainerDiv = document.querySelector("#imageContainerDiv");
  
   //define  your functions
   function loadImageFileDropdown() {
    for (const imageFile of imageFiles) {
      let option = document.createElement("option");
      option.value = imageFile.id;
      option.innerText = imageFile.description;
      imageFileDropdown.appendChild(option);
    }
  }

  function addImage() {
    const id = imageFileDropdown.value;
    const imageFile = imageFiles.find((imageFile) => imageFile.id == id);

    let image = document.createElement("img");
    image.src = imageFile.path;
    image.alt = imageFile.description;
    imageContainerDiv.appendChild(image);
  }

  function clearImages() {
    imageContainerDiv.replaceChildren();
  }

  //associate your functions with html element events
  addImageButton.onclick = addImage;
  clearImagesButton.onclick = clearImages;

  //initial loading
  loadImageFileDropdown();
};
