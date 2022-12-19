<script>
import { store } from "../store.js";

export default {
  props: {
    info: Object,
  },
  computed: {
    rating() {
      return Math.round(this.info.vote_average / 2);
    },
    languageClass() {
      if (this.info.original_language === 'en') {
        return 'fi-gb';
      } else if (this.info.original_language === 'ja') {
        return 'fi-jp';
      } else {
        return `fi-${this.info.original_language}`;
      }
    }
  },
  data() {
    return {
      store,
    }
  },
};
</script>

<template>
  <div class="card">
    <div class="front">
      <img :src="`https://image.tmdb.org/t/p/original${info.poster_path}`" :alt="info.title">
    </div>
    <div class="back">
      <div class="back-content">
        <div class="card-body">
          <div class="card-text-movie" v-if="info.title">
            Movie Title:
            <h5 class="card-title mt-1">{{ info.title }}</h5>
            <p class="card-text" v-if="info.original_title !== info.title">
              Original Movie Title:
            <h5>
              {{ info.original_title }}
            </h5>
            </p>
            <p class="card-text mt-1">{{ info.original_language }}
              <span>
                <span class="px-3 fi" :class="languageClass"></span>
              </span>
            </p>
          </div>
          <div class="card-text-series" v-if="info.name">
            Title TV Series:
            <h5 class="card-title mt-1">
              {{ info.name }}
            </h5>
            <p class="card-text" v-if="info.original_name !== info.name">
              Original Title:
              <span>
                {{ info.original_name }}
              </span>
            </p>
            <p class="card-text">{{ info.original_language }}
              <span>
                <span class="px-3 fi mt-1" :class="languageClass"></span>
              </span>
            </p>
          </div>
          <div class="ms_rating-stars">
            <template v-for="n in 5">
              <img v-if="n <= rating" src="../assets/img/full-star.png" alt="stella piena">
              <img v-else src="../assets/img/empty-star.png" alt="stella vuota">
            </template>
          </div>
          <p class="card-text ms_card-preview-text">{{ info.overview }}</p>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
@use '../styles/general.scss' as *;

.card {
  cursor: pointer;
  height: 460px;

  &:hover>.front {
    transform: perspective(600px) rotateY(-180deg);
  }

  &:hover>.back {
    transform: perspective(600px) rotateY(0deg);
  }


  .back,
  .front {
    border-radius: 5px;
    width: 100%;
    height: 100%;
    overflow: hidden;
    backface-visibility: hidden;
    position: absolute;
    transition: transform .6s linear;
  }

  .front {
    img {
      height: 100%;
      width: 100%;
    }
  }

  .back {
    background: rgba(0, 0, 0, .8);
    transform: perspective(600px) rotateY(180deg);

    .back-content {
      color: #fff;
      text-align: center;
      width: 100%;

      .ms_rating-stars {
        padding-top: .3em;

        img {
          width: 7%;
        }
      }

      .ms_card-preview-text {
        padding-top: 1em;
        display: -webkit-box;
        -webkit-line-clamp: 10;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

    }
  }
}
</style>