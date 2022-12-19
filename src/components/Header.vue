<script>
import AppSearch from '../components/AppSearch.vue'
import FilmList from '../components/FilmList.vue'
import { store } from "../store.js";
import axios from 'axios';

export default {
  components: {
    AppSearch,
    FilmList,
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
        myUrl += `${store.apiMovieSearch}&query=${store.searchFilm}`
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
  <div class="container-fluid g-0 position-relative">
    <div class="navigation-wrapper">
      <div class="header-logo">
        <img class="margin-auto" src="../assets/img/Logo.png" alt="Netflix Logo">
        <a href="#">Accedi</a>
      </div>
    </div>
    <div class="jumbo-bg">
      <div class="jumbo">
        <img class="jumbo-image" src="../assets/img/Jumbotron.jpg" alt="Background Image With Multiple Films">
        <div class="jumbo-gradient"></div>
      </div>
    </div>
    <div class="jumbo-text">
      <h1>Festeggia Star Wars Day.</h1>
      <h2>Goditi il piano Base gratis per 7 giorni.</h2>
      <AppSearch @performSearch="searchFilm" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;


.jumbo-text {
  margin: 0 auto;
  max-width: 950px;
  padding: 75px 0;
  position: relative;
  text-align: center;
  width: 100%;
  z-index: 10;
  color: #fff;

  h1 {
    font-size: 4rem;
    font-weight: 900;
  }

  h2 {
    font-size: 1.625rem;
    padding: 1em 2em;
  }
}

.jumbo-bg {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  .jumbo {
    position: relative;
    height: 750px;

    .jumbo-image {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }

    .jumbo-gradient {
      bottom: 0;
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      background: rgba(0, 0, 0, .4);
      background-image: linear-gradient(0deg, rgba(0, 0, 0, .8) 0, transparent 60%, rgba(0, 0, 0, .8));
    }
  }
}

.navigation-wrapper {
  padding-top: 1em;

  .header-logo {
    z-index: 10;
    position: relative;
    align-items: center;
    display: flex;
    height: auto;
    padding: .5em 3em;

    .margin-auto {
      margin-right: auto;
    }

    img {
      height: 2.8125rem;
      width: 10.4375rem;
    }

    a {
      background-color: #e50914;
      font-size: 1rem;
      font-weight: 600;
      line-height: normal;
      padding: 5px 20px 3px 20px;
      border-radius: 3px;
      color: #fff;
      text-decoration: none;
    }
  }
}
</style>