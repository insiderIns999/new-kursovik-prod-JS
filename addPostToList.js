import { token, onAddPostClick } from "./api.js";

export const addPostToList = ({ description, uploadImageURL }) => {
  const addPostToListButton = document.getElementById("add-button");

  addPostToListButton.addEventListener("click", () => {
    if (token == null) {
      throw new Error("Пользователь не авторизован");
    } else {
      onAddPostClick({ description, uploadImageURL })
        .then(() => {
          authHeaderRender();
        })
        .then(() => {
          renderPosts();
        });
    }
  });
};
