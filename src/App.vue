<script>
import { store } from "./store.js";
import Header from './components/Header.vue'
import HomeMain from './components/HomeMain.vue'

export default {
  components: {
    Header,
    HomeMain,
  },
  data() {
    return {
      store,
    }
  },
};
</script>

<template>
  <Header />
  <HomeMain />
</template>

<style lang="scss" scoped>
@use './styles/general.scss' as *;
</style>