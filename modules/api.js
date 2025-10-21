import { updatePosts } from "./posts.js";

const personalKey = 'oleg-gagarin';
const baseHost = `https://wedev-api.sky.pro/api/v1/${personalKey}/instapro/`;
const userRegistrationHost = 'https://wedev-api.sky.pro/api/user';
const authorizationHost = 'https://wedev-api.sky.pro/api/user/login';

export let token;
export function updateToken(newToken) {
  token = newToken;
}

export function getPosts() {
  return fetch(baseHost, {
    method: "GET",
    headers: {
      Authorization: token,
    },
  })
    .then((response) => {
      if (response.status === 401) {
        throw new Error("Нет авторизации");
      }
      return response.json();
    })
    .then((data) => {
      return updatePosts(data.posts);
    });
}

export function registerUser({ login, password, name }) {
  return fetch(userRegistrationHost, {
    method: "POST",
    body: JSON.stringify({
      login,
      password,
      name,
    }),
  }).then((response) => {
    if (response.status === 400) {
      throw new Error("Такой пользователь уже существует");
    }
    return response.json();
  }).then(() => {
    alert('Вы успешно зарегистрировались');
  });
}

export function loginUser({ login, password }) {
  return fetch(authorizationHost, {
    method: "POST",
    body: JSON.stringify({
      login,
      password,
    }),
  }).then((response) => {
    if (response.status === 400) {
      throw new Error("Неверный логин или пароль");
    }
    return response.json();
  });
}