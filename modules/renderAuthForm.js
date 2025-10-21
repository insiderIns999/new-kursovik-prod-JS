import { loginUser } from './api.js';

export const renderAuthForm = ({ appEl }) => {
    const authLink = document.querySelector('.auth-link');

    authLink.addEventListener('click', () => {
        const appEl = document.getElementById('app');
        const authFormHTML = `
            <div class="page-container">
                <div class="header-container"></div>
                <div class="form">
                    <h3 class="form-title">Вход</h3>
                    <div class="form-inputs">
                        <div class="upload-image-container"></div>
                        <input type="text" id="login-input" class="input" placeholder="Логин" />
                        <input type="password" id="password-input" class="input" placeholder="Пароль" />
                        <div class="form-error"></div>
                        <button class="button" id="authorization-button">Войти</button>
                    </div>
                </div>
            </div>    
        `;

        appEl.innerHTML = authFormHTML;

        const login = document.getElementById('login-input').value;
        const password = document.getElementById('password-input').value;

        const authButtonElement = document.getElementById('authorization-button');

        authButtonElement.addEventListener('click', () => {
            loginUser({ login, password });
        });
    });
}