<template>
  <div class="movie-detail">
    <!-- Title of the Movie  -->
    <div v-if="!loading">
      <LoaderComp />
    </div>
    <div v-else>
      <div class="title">
        <h2>{{movie.name}}</h2>
      </div>

      <!-- section divider between Image of the show and desciption -->
      <div class="show-container">

        <!-- Section for the image and other bot details -->
        <div class="avatar-section">
          <div class="feature-img">
            <img :src="movie.image?.medium || constant.detailFallbackImage" :alt=constant.movieDetailImageAlt />
          </div>
          <div class="info">
            <p v-html="movie.summary"></p>
          </div>
        </div>

        <!-- Section for the Description on the right side for web view  -->
        <div class="description">
          <div class="description-section"><span>Language</span> : {{movie.language}}</div>
          <div class="description-section"><span>Premiered</span> : {{movie.premiered}}</div>
          <div class="description-section"><span>Rating</span> : {{movie.rating?.average || "N.A"}}</div>
          <div class="description-section"><span>Genre</span> : {{movie.genres?.length>0 ?
          movie.genres.join(','):"N.A"}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// Individual Detail Page
import AppServices from '@/services/AppServices';
import { onBeforeMount, ref } from 'vue';
import { computed } from '@vue/reactivity';
import { useRoute } from 'vue-router';
import LoaderComp from '@/components/loader/Loader.vue';
import { constant } from '@/utils/constants';
export default {
  name: 'MovieDetail',
  components: {
    LoaderComp
  },
  setup() {
    const route = useRoute()
    const movie = ref({});
    onBeforeMount(async () => {
      const response = await AppServices.getShowItemInfo(route.params.id)
      movie.value = response.data;
    })
    const loading = computed(() => {
      return movie.value?.id ? true : false
    })
    return {
      movie,
      loading,
      constant
    }
  }
}
</script>
  
<style lang="scss">
.movie-detail {
  padding: 16px;
  margin: 16px;
  border: $border-red;
  border-radius: 16px;
  background-color: $color-dark-grey;

  .title {
    text-align: center;
    padding: 16px 0px;
    color: $color-pale-orange;
  }
}

.show-container {
  display: flex;
}

@media (max-width: $screen-sm-min) {
  .show-container {
    flex-direction: column;
  }

  .description {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
  }
}

.feature-img {
  display: flex;
  justify-content: center;
}

.info {
  color: $color-white;
  text-align: justify;
  line-height: 1.8;
  padding: 16px;
}

.description {
  min-width: 50%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-evenly;
  padding-left: 16px;

  &-section {
    padding: 12px 0px;
    color: $color-white;
  }

  span {
    display: inline;
    padding: 4px;
    margin-right: 5px;
    background-color: $color-red;
    color: $color-white;
    font-size: 0.9em;
    border-radius: 4px
  }
}

.feature-img {
  align-items: center;
}
</style>