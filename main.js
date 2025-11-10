import { renderHeader } from './modules/renderHeader.js';
import { renderPosts } from './modules/renderPosts.js';
import { renderRegistrationForm } from './modules/renderRegistrationForm.js';
import { renderAuthForm } from './modules/renderAuthForm.js';

export let token;

export function updateToken(newToken) {
	token = newToken;
}

export let appEl = document.getElementById("app");

renderHeader();
renderRegistrationForm({ appEl });
renderAuthForm({ appEl });
renderPosts();

console.log('kursovik');