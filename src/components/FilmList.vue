<script>
import FilmCard from './FilmCard.vue'
import { store } from "../store.js";

export default {
  components: {
    FilmCard
  },
  data() {
    return {
      store,
    }
  }
}
</script>

<template>

  <CharacterCard />

</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
</style>