export const quitFromApp = () => {
    const quitButtonElement = document.getElementById('quit-button');
    quitButtonElement.addEventListener('click', () => {
        const appEl = document.getElementById('app');
        const headerHTML = `
        <div class="page-header">
            <h1 class="logo">instapro</h1>
            <button class="header-button auth-link">Войти</button>
            <button class="header-button registration-link">Зарегистрироваться</button>  
        </div>
        `;

        appEl.innerHTML = headerHTML;
    });
}