import { reactive } from "vue";

export const store = reactive({
  MovieList: [],
  apiURL: "https://api.themoviedb.org/3/search/movie?api_key=a8c539ffcddf0e1165c359cbff81d1f2&query=batman",
  searchFilm: "",
});

