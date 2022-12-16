<script>
import { store } from "../store.js";

export default {
  props: {
    info: Object,
  },
  computed: {
    rating() {
      let voteStars = this.info.vote_average / 2;

      voteStars = Math.round(voteStars);

      return voteStars;
    },
  },
  data() {
    return {
      store,
    }
  },
};
</script>

<template>
  <div class="card h-100 m-0">
    <img :src="`https://image.tmdb.org/t/p/original${info.poster_path}`" class="card-img-top" :alt="info.title">
    <div class="card-body">
      <h5 class="card-title">Title: {{ info.title }}</h5>
      <p class="card-text">Original Title: {{ info.original_title }}</p>

      <div class="ms_rating-stars">
        Rating:
        <template v-for="n in 5">
          <img v-if="n <= rating" src="../assets/img/full-star.png" alt="stella piena">
          <img v-else src="../assets/img/empty-star.png" alt="stella vuota">
        </template>
      </div>

      <p class="card-text">{{ info.overview }}</p>
      <p class="card-text">{{ info.original_language }}
        <span>
          <span class="px-3 fi" :class="[`fi-${info.original_language}`, `fi-gb`]"
            v-if="info.original_language === 'en'"></span>
          <span class="px-3 fi" v-else :class="`fi-${info.original_language}`"></span>
        </span>
      </p>

    </div>
  </div>
</template>


<style lang="scss" scoped>
@use '../styles/general.scss' as *;

.ms_rating-stars {
  img {
    width: 7%;
  }
}
</style>