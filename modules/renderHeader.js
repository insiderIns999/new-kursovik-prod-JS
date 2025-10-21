import { getPostDate } from './postDate.js';
import { posts } from './posts.js';
import { fetchAndRenderPosts } from './fetchAndRenderPosts.js';

const postsList = document.getElementById('posts-list');

export function renderHeader() {
    const appEl = document.getElementById('app');
	
	const headerHTML = `
	<div class="page-header">
		<h1 class="logo">instapro</h1>
		<button class="header-button auth-link">Войти</button>
		<button class="header-button registration-link">Зарегистрироваться</button>  
	</div>
	`;

	appEl.innerHTML = headerHTML;
}

