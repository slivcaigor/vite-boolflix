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
  <div v-if="info.title && info.original_title && info.overview" class="card">
    <div class="front">
      <img :src="`https://image.tmdb.org/t/p/original${info.poster_path}`" :alt="info.title">
    </div>

    <div class="back">
      <div class="back-content">
        <div class="card-body">
          <h5 class="card-title">Title: {{ info.title }}</h5>
          <p class="card-text">Original Title: {{ info.original_title }}</p>
          <p class="card-text">{{ info.original_language }}
            <span>
              <span class="px-3 fi" :class="languageClass"></span>
            </span>
          </p>
          <div class="ms_rating-stars">
            Rating:
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

  .front,
  .back {
    width: 100%;
    height: 100%;
    overflow: hidden;
    backface-visibility: hidden;
    position: absolute;
    transition: transform .6s linear;
  }

  .front {
    transform: perspective(600px) rotateY(0deg);

    img {
      height: 460px;
    }
  }

  .back {
    background-color: #303030;
    transform: perspective(600px) rotateY(180deg);

    .back-content {
      color: #fff;
      text-align: center;
      width: 100%;

      .ms_rating-stars {
        img {
          width: 7%;
        }
      }

      .ms_card-preview-text {
        display: -webkit-box;
        -webkit-line-clamp: 13;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

    }
  }
}
</style>