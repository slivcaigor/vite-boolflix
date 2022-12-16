<script>
export default {
  props: {
    info: Object,
  },
};
</script>

<template>
  <div class="card h-100">
    <img :src="`https://image.tmdb.org/t/p/original${info.poster_path}`" class="card-img-top" :alt="info.title">
    <div class="card-body">
      <h5 class="card-title">{{ info.title }}</h5>
      <p class="card-text">{{ info.original_title }}</p>
      <p class="card-text">{{ info.vote_average }}</p>
      <p class="card-text">{{ info.overview }}</p>
      <p class="card-text">{{ info.original_language }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
</style>