import { registerUser } from './api.js';

export const renderRegistrationForm = ({ appEl }) => {
    const registrationLink = document.querySelector('.registration-link');

    registrationLink.addEventListener('click', () => {
        const appEl = document.getElementById('app');
        const registrationFormHTML = `
            <div class="page-container">
                <div class="header-container"></div>
                <div class="form">
                    <h3 class="form-title">Регистрация</h3>
                    <div class="form-inputs">
                        <input type="text" id="name-input" class="input" placeholder="Имя" />
                        <input type="text" id="login-input" class="input" placeholder="Логин" />
                        <input type="password" id="password-input" class="input" placeholder="Пароль" />
                        <div class="form-error"></div>
                        <button class="button" id="registration-button">Зарегистрироваться</button>
                    </div>
                </div>
            </div>    
        `;

        appEl.innerHTML = registrationFormHTML;

        const regButtonElement = document.getElementById('registration-button');
        regButtonElement.addEventListener('click', () => {
            const name = document.getElementById('name-input').value;
            const login = document.getElementById('login-input').value;
            const password = document.getElementById('password-input').value;

            registerUser({ login, password, name });
        });
    });
}