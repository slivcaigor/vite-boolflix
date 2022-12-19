<script>
import FilmCard from './FilmCard.vue'
import { store } from "../store.js";

export default {
  components: {
    FilmCard,
  },
  data() {
    return {
      store,
      activeImage: 0,
      timer: 0,
    }
  },
  methods: {
    shiftSlidesLeft() {
      this.store.movieList.push(this.store.movieList.shift());
    },
    shiftSlidesRight() {
      this.store.movieList.unshift(this.store.movieList.pop());
    },
    nextImage() {
      this.shiftSlidesLeft();
      this.activeImage--;
    },
    prevImage() {
      this.shiftSlidesRight();
      this.activeImage++;
    },
    // start() {
    //   this.timer = setInterval(() => {
    //     this.nextImage();
    //   }, 5000);
    // },
    // pause() {
    //   clearInterval(this.timer);
    // },
  },
  // mounted() {
  //   this.start();
  // },
}
</script>

<template>
  <div class="container-slides">
    <div class="ms_cards container">
      <div class="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-4 m-0 p-0 justify-content-center">
        <div class="col"
          v-for="(film, index) in store.movieList.filter(movie => movie.poster_path && movie.title && movie.original_title && movie.overview)"
          :key="film.id">
          <FilmCard v-if="index <= 4" :info="film" @mouseover="pause" @mouseleave="start" />
        </div>
      </div>
    </div>
    <div class="prev" @click="prevImage"></div>
    <div class="next" @click="nextImage"></div>
  </div>

</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/general.scss' as *;
@use '../styles/partials/mixins' as *;

.container {
  max-width: 1700px !important;
}

.row-cols-xl-4>* {
  width: calc(100% / 5) !important;
}

.container-slides {
  @include center();
  position: relative;
}

.prev {
  margin: 2em;
  left: 0;
  background-image: url("../assets/img/chevron-sinistra.png");
  height: 64px;
  width: 64px;
  position: absolute;
  cursor: pointer;
  z-index: 999;
}

.next {
  margin: 2em;
  right: 0;
  background-image: url("../assets/img/chevron-destra.png");
  height: 64px;
  width: 64px;
  position: absolute;
  cursor: pointer;
  z-index: 999;
}
</style>