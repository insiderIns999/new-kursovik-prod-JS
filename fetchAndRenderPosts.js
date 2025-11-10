import { getPosts } from './api.js';
import { renderPosts } from './renderPosts.js';
import { updatePosts } from './posts.js';


export const fetchAndRenderPosts = () => {
  return getPosts()
    .then((data) => {
      updatePosts(data.posts);
      /*
      const dataPosts = data.posts;
      dataPosts.forEach((dataPost) => {
        getPostDate(dataPost.createdAt);
      });
      */
      renderPosts();
    })
    .catch((error) => {
      alert(error.message);
    });
}