<script>
import { store } from "../store.js";

export default {
  data() {
    return {
      store,
    }
  },
};
</script>

<template>
  <div class="container mb-3">
    <div class="row">
      <div class="col-12">
        <form class="row g-3 justify-content-center">
          <div class="col-auto">
            <label for="search-film" class="visually-hidden">Search Film</label>
            <input id="search-film" v-model="store.searchFilm" type="text" class="form-control"
              placeholder="Search Film">
          </div>
          <div class="col-auto">
            <button @click.prevent="$emit('performSearch')" type="submit" class="btn btn-primary">Search</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template> 

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
</style>