export function getPostDate(dataPostDate) {
  const date = new Date(dataPostDate);
  const postDate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
  const userMonth =
    date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1;
  const postYear = date.getFullYear().toString().substr(-2);
  const postHours =
    date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
  const postMinutes =
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  return `${postDate}.${postMonth}.${postYear} ${postHours}:${postMinutes}`;
}
