import { addPostToList } from "./addPostToList.js";
import { uploadImage } from "./api.js";

export const addPost = () => {
  const addPostButtonElement = document.getElementById("add-post-button");
  addPostButtonElement.addEventListener("click", () => {
    const appEl = document.getElementById("app");
    const addPostHTML = `
            <div class="upload-image">
                <div class="file-upload-image-container">
                    <img id="upload-image" class="file-upload-image" alt="Загруженное изображение" />
                    <button id="change-photo-button" class="file-upload-remove-button button">Заменить фото</button>
                </div>
                <label id="label-upload-image" class="file-upload-label secondary-button">
                    <input id="input-upload-image" type="file" class="file-upload-input" style="display: none" />Выберите фото
                </label>
            </div>
            <div class="page-container">
                <div class="header-container"></div>
                <textarea id="description" rows="10" cols="20"></textarea>
                <button class="button" id="add-button">Добавить</button>
            </div>
        `;

    appEl.innerHTML = addPostHTML;

    const inputUploadImage = document.getElementById("input-upload-image");
    const uploadImageURL = URL.createObjectURL(inputUploadImage.files[0]);
    const changePhotoButton = document.getElementById("change-photo-button");
    inputUploadImage.addEventListener("change", () => {
      if (inputUploadImage) {
        const image = document.getElementById("upload-image");
        inputUploadImage.value = null;
        image.src = uploadImageURL;
        image.onload = () => URL.revokeObjectURL(uploadImageURL);
        image.style.display = "block";
        const labelUploadImage = document.getElementById("label-upload-image");
        labelUploadImage.setAttribute("disabled", true);
        labelUploadImage.textContent = "Загружаю файл...";
      }
    });

    const description = document.getElementById("description").value;
    addPostToList({ description, uploadImageURL });
  });
};
