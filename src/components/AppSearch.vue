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
            <label for="search-film" class="visually-hidden">Cerca Film</label>
            <input id="search-film" v-model="store.searchFilm" type="text" class="form-control"
              placeholder="Cerca Film">
          </div>
          <div class="col-auto">
            <button @click.prevent="$emit('performSearch')" type="submit" class="btn btn-primary">
              Cerca <span>&#8250;</span></button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template> 

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;

.container {
  z-index: 10;
  position: absolute;

  .col-auto {
    padding-right: 2px;
    padding-left: 0;

    input {
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
      height: 70px !important;
      min-width: 500px;
      font-size: 22px;
    }

    .btn-primary {
      padding: 0 2em;
      font-size: 1.475rem;
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
      height: 70px;
      --bs-btn-bg: #e50914;
      --bs-btn-border-color: #e50914;

      &:hover {
        background: #f40612;
        border-color: #f40612;
      }

      span {
        font-size: 40px;
        vertical-align: middle;
      }
    }
  }

}
</style>