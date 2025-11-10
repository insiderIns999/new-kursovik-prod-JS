import { addPostToList } from "./addPostToList.js";
import { uploadImage } from './api.js';

export const addPost = () => {
    const addPostButtonElement = document.getElementById('add-post-button');
    addPostButtonElement.addEventListener('click', () => {
        const appEl = document.getElementById('app');
        const addPostHTML = `
            <div class="upload-image">
                <div class="file-upload-image-container">
                    <img class="file-upload-image"  alt="Загруженное изображение" />
                    <button class="file-upload-remove-button button">Заменить фото</button>
                </div>
                <label class="file-upload-label secondary-button">
                    <input type="file" class="file-upload-input" style="display: none" />Выберите фото
                </label>
            </div>
            <div class="page-container">
                <div class="header-container"></div>
                    Cтраница добавления поста
                <button class="button" id="add-button">Добавить</button>
            </div>
        `;

        appEl.innerHTML = addPostHTML;

        const fileInputElement = document.querySelector(".file-upload-input");
        fileInputElement.addEventListener("change", () => {
            const file = fileInputElement.files[0];
            if (file) {
                const labelEl = document.querySelector(".file-upload-label");
                labelEl.setAttribute("disabled", true);
                labelEl.textContent = "Загружаю файл...";
                
                // Загружаем изображение с помощью API
                uploadImage({ file })
                /*.then(({ fileUrl }) => {
                    console.log('OK');
                    imageUrl = fileUrl; // Сохраняем URL загруженного изображения
                    onImageUrlChange(imageUrl); // Уведомляем о изменении URL изображения
                    appEl.innerHTML = addPostHTML; // Перерисовываем компонент с новым состоянием
                });*/
            }
        });

        //addPostToList();
    });
}