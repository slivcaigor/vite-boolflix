<script>
import AppSearch from '../components/AppSearch.vue'
import FilmList from '../components/FilmList.vue'
import { store } from "../store.js";
import axios from 'axios';

export default {
  components: {
    AppSearch,
    FilmList
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    searchFilm() {

      let myUrl = store.apiURL;

      if (store.searchFilm !== "") {
        myUrl += `&query=${store.searchFilm}`
      }

      axios
        .get(myUrl)
        .then(res => { store.movieList = res.data.results; })
        .catch(err => {
          console.log("Errors", err);
        })
    },
  },
  mounted() {
    this.searchFilm();
  }
};
</script>

<template >

  <AppSearch @performSearch="searchFilm" />

</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
</style>