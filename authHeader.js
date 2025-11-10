import { renderPosts } from './renderPosts.js';

export const authHeaderRender = () => {
    const appEl = document.getElementById('app');
    const authHeaderHTML = `
    <div class="page-header">
        <h1 class="logo">instapro</h1>
        <button id="add-post-button" class="header-button add-or-login-button">
            <div title="Добавить пост" class="add-post-sign"></div>
        </button>
        <button id="quit-button" title="Имя пользователя" class="header-button logout-button">Выйти</button>
    </div>
    `;

    appEl.innerHTML = authHeaderHTML;
    renderPosts();
}