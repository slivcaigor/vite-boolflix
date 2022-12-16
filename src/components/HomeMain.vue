<script>
import HomeSection from './HomeSection.vue'
import FilmList from './FilmList.vue'
import { store } from "../store.js";

export default {
  components: {
    HomeSection,
    FilmList
  },
  data() {
    return {
      store,
    }
  }
}
</script>

<template>

  <FilmList />
  <HomeSection />

</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
</style>