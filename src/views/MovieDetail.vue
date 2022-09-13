<template>
  <div class="movie-detail">
    <!-- Title of the Movie  -->
    <div class="title"><h2>{{movie.name}}</h2></div>
    
    <!-- section divider between Image of the show and desciption -->
    <div class="show-container"> 

      <!-- Section for the image and other bot details -->
        <div class="avatar-section">
          <!-- Section for image -->
          <div class="feature-img">        
            <img :src="movie.image?.medium" alt="Movie poster" />
          </div>
            <!-- Section for other minute details -->
          

          <div class="info">
          <p v-html="movie.summary"></p>
          </div>

        </div>

        <!-- Section for the Description on the right side for web view  -->
        <div class="description">
            <div class="desc-section"><span>Language</span> : {{movie.language}}</div>
            <div class="desc-section"><span>Premiered</span> : {{movie.premiered}}</div>
            <div class="desc-section"><span>Rating</span> : {{movie.rating?.average || "N.A"}}</div>
            <div class="desc-section"><span>Genre</span> : {{movie.genres?.length>0 ? movie.genres.join(','):"N.A"}}</div>
          </div>
    </div>
  
  </div>
</template>
<script>
  // @ is an alias to /src
  import AppServices from '@/services/AppServices';
import { onBeforeMount, ref } from 'vue';
import { useRoute } from 'vue-router'
  export default {
    setup(){  
    const route = useRoute()
    const movie=ref({});
    onBeforeMount(async() => {
 const response= await  AppServices.getShowItemInfo(route.params.id)
 movie.value = response.data;
})
 return {movie}
}
  }
  </script>
  
  <style lang="scss">
    .movie-detail{
      padding: 16px;
      margin:16px;
      border: 1px solid #FF3B41;
      border-radius: 16px;
      background-color: #12293f;
      .title{
        text-align: center;
        padding: 16px 0px;
        color: #f8e2aa;
      }
    }

    .show-container{
      display: flex;
    }

    @media (max-width: 600px){
    .show-container{
      flex-direction: column;
    }
    .description{
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    }
    }

    .feature-img{
      display: flex;
    justify-content: center;
    }

    .info{
      color: #FFF;
      text-align: justify;
      line-height: 1.8;
      padding: 16px;
    }

    .description{
      min-width: 50%;
      display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-evenly;
    padding-left: 16px;
      .desc-section{
        padding:12px 0px;
        color:#FFF;
      }
      span{
        display: inline;
        padding: 4px;
        margin-right: 5px;
        background-color: #FF3B41;
        color: #fff;
        font-size: 0.9em;
        border-radius: 4px
      }
    }
    .feature-img{
      align-items: center;
    }
  </style>