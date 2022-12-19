<script>
import HomeSection from './HomeSection.vue'
import FilmList from './FilmList.vue'
import AppFooter from './AppFooter.vue'
import { store } from "../store.js";

export default {
  components: {
    HomeSection,
    FilmList,
    AppFooter
  },
  data() {
    return {
      store,
    }
  }
}
</script>

<template>

  <div class="wrapper-films">


    <FilmList />
    <HomeSection />
    <AppFooter />
  </div>

</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
</style>