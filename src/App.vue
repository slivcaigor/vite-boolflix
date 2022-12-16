<script>
import { store } from "./store.js";
import axios from 'axios';
import Header from './components/Header.vue'
import HomeMain from './components/HomeMain.vue'

export default {
  components: {
    Header,
    HomeMain
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getMovies() {

      let myUrl = store.apiURL;

      axios
        .get(myUrl)
        .then(res => { store.MovieList = res.data.results; })
        .catch(err => {
          console.log("Errors", err);
        })
    },
  },
  mounted() {
    this.getMovies();
  }
};
</script>

<template>

</template>

<style lang="scss" scoped>
@use './styles/general.scss' as *;
</style>
