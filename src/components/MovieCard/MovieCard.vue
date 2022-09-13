<template>
  <div class="feature-card">
    <div class="movie-link">
      <div class="product-image">
        <img :src="Url" alt="movie poster" class="feature-img" />
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
// @ is an alias to /src

import { toRefs } from 'vue';

export default {
 name : 'MovieCard',
 props:{
  imageUrl:String,
  name:String,
  summary:String,
  type:String,
  year:String
 },
 setup(props){
  const {
    imageUrl,
    name,
    summary,
    type,
    year
  } = toRefs(props)

  return {
    Url :imageUrl,
    title:name,
    desc:summary,
    showType:type,
    premiered:year
  }
 }
}
</script>

<style lang="scss">
  .feature-card {
    position: relative;
    max-width:210px;
    .detail {
          background-color: #496583;
          padding: 16px 8px;
          flex: 1 1 100%;
          border-radius: 0px 0px 8px 8px;
          .year {
            color: #AAA;
            font-size: 14px;
          }
          h3 {
            color: #FFF;
            font-weight: 600;
            font-size: 18px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          p{
            color: #FFF;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
          }
      }

    .movie-link{
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

    .type{
      padding: 8px 16px;
      background-color: #42B883;
      color: #FFF;
      text-transform: capitalize;
      }
    }
    }
</style>