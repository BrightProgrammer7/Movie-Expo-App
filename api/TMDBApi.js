// const API_TOKEN = "13f013459bd70da501c8728dbecb9907";
// const API_TOKEN = "a3419bf0b7ca2a33db3077cd5ff95f5f";
const API_KEY =
  process.env.EXPO_PUBLIC_TMDB_KEY || "0ce9bf4ea76846d56e5cc8485844bbda";

export async function getFilmsFromApiWithSearchedText(text, page) {
  const url =
    "https://api.themoviedb.org/3/search/movie?api_key=" +
    API_KEY +
    "&language=en-US&query=" +
    text +
    "&page=" +
    page;
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    return console.error(error);
  }
}

export function getImageFromApi(name) {
  return "https://image.tmdb.org/t/p/w300" + name;
}

export async function getFilmDetails(id) {
  const url =
    "https://api.themoviedb.org/3/movie/" + id + "?api_key=" + API_KEY;
  // return await (await fetch(url)).json();
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error));
}
