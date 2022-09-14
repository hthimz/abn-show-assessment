<template>
  <div class="feature-card" data-test="feature">
    <div class="movie-link">
      <div class="product-image">
        <img :src="url" alt="movie poster" class="feature-img" />
      </div>
      <div class="type">{{showType}}</div>
      <div class="detail">
        <h3>{{title}}</h3>
        <p class="year">{{premiered}}</p>
        <p v-html="desc"></p>
      </div>

    </div>
  </div>
</template>

<script>

import { toRefs } from 'vue';

export default {
  name: 'MovieCard',
  props: {
    imageUrl: String,
    name: String,
    summary: String,
    type: String,
    year: String
  },
  setup(props) {
    const {
      imageUrl,
      name,
      summary,
      type,
      year
    } = toRefs(props)

    return {
      url: imageUrl,
      title: name,
      desc: summary,
      showType: type,
      premiered: year
    }
  }
}
</script>

<style lang="scss">
.feature-card {
  position: relative;
  max-width: 210px;

  .detail {
    background-color: $color-light-grey;
    padding: 16px 8px;
    flex: 1 1 100%;
    border-radius: 0px 0px 8px 8px;

    .year {
      color: $color-light-brown;
      font-size: 14px;
    }

    h3 {
      color: $color-white;
      font-weight: 600;
      font-size: 18px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    p {
      color: $color-white;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }

  .movie-link {
    display: flex;
    flex-direction: column;
    height: 100%;

    .featured-img {
      display: block;
      width: 100%;
      height: 275px;
      object-fit: cover;
      position: relative;
      z-index: 0;
    }

    .type {
      padding: 8px 16px;
      background-color: $color-green;
      color: $color-white;
      text-transform: capitalize;
    }
  }
}
</style>