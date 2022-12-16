import { reactive } from "vue";

export const store = reactive({
  movieList: [],
  type: ["movie", "tv"],
  apiURL: "https://api.themoviedb.org/3/search/multi?api_key=a8c539ffcddf0e1165c359cbff81d1f2&query=star",
  searchFilm: "",
});

