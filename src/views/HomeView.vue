<template>
  <div class="home">
    <!-- Search Input for Movies  -->
    <SearchInput movies="movies" @updateMovies="updateTvShows"
      @setDashboardMoviesFromLocal="setDashboardMoviesFromLocalStorage" />
    <!-- Dashboard loads with following movie -->
    <div v-if="showDashboardMovies" class="dashboard-list">
      <div v-for="(value, key) in availableGenres" :key="key" class="scrolling-wrapper-js">
        <div class="genre-text">{{key}}</div>
        <div v-for="movie in value" :key="movie.score" class="card">
          <router-link :to="'/movie/'+movie.id" class="movie-link">
            <MovieCard :imageUrl="movie.image?.medium || constant.fallbackImage" :name="movie.name"
              :summary="movie.summary" :type="movie.type" :year="movie?.premiered?.split('-')[0] || 'N.A'" />
          </router-link>
        </div>
      </div>
    </div>


    <!-- View when Movie is Searched and result will be shown by following snippet -->
    <div v-else class="movies-list">
      <div class="movie" v-for="movie in movies" :key="movie.show.id">
        <router-link :to="'/movie/'+movie.show.id" class="movie-link">
          <MovieCard :imageUrl="movie.show.image?.medium || constant.fallbackImage" :name="movie.show.name"
            :summary="movie.show.summary" :type="movie.show.type"
            :year="movie.show?.premiered?.split('-')[0] || 'N.A'" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
// Dashboard 
import MovieCard from '@/components/movie-card/MovieCard.vue';
import SearchInput from '@/components/search-input/SearchInput.vue';
import AppServices from '@/services/AppServices';
import { requiredGenre, constant } from '@/utils/constants';
import { computed } from '@vue/reactivity';
import { onMounted, ref } from 'vue';
import { setDashboardDataInLocalStorage, useCachedStorageForDashboard, getDashboardDataInLocalStorage } from '@/utils/helper';
export default {
  name: 'HomeView',
  components: {
    MovieCard,
    SearchInput
  },
  setup() {
    const movies = ref([]);
    let showDashboardMovies = ref(true);
    const updateTvShows = (value) => {
      movies.value = value;
      showDashboardMovies.value = false
    }

    const availableGenres = computed(() => {
      const availableDashboardGenreObject = {}
      movies.value.length && requiredGenre.map(requiredGenreKey => {
        movies.value.map(moviesKey => moviesKey.genres.indexOf(requiredGenreKey) != -1 ?
          !availableDashboardGenreObject[requiredGenreKey] ?
            availableDashboardGenreObject[requiredGenreKey] = [moviesKey]
            :
            availableDashboardGenreObject[`${requiredGenreKey}`].push(moviesKey)
          :
          false
        )
      })
      return availableDashboardGenreObject
    })

    onMounted(async () => {
      if (useCachedStorageForDashboard()) {
        setDashboardMoviesFromLocalStorage()
      } else {
        const response = await AppServices.getShows(constant.getShowsPageNumber);
        movies.value = response.data;
        showDashboardMovies.value = true
        setDashboardDataInLocalStorage(response.data)
      }
    })

    const setDashboardMoviesFromLocalStorage = () => {
      showDashboardMovies.value = true
      let data = getDashboardDataInLocalStorage(constant.dashboardShowsDataCache);
      movies.value = data;
    }
    return {
      constant,
      movies,
      updateTvShows,
      requiredGenre,
      availableGenres,
      showDashboardMovies,
      setDashboardMoviesFromLocalStorage,
    }
  }
}
</script>

<style lang="scss">
div {
  color: inherit;
}

.movies-list {
  display: flex;
  flex-wrap: wrap;
  margin: 0px 8px;
  justify-content: center;

  .movie {
    padding: 16px 8px;
  }
}

.dashboard-list {
  width: 100%;
  padding: 10px;
  overflow: hidden;
}

.scrolling-wrapper-js {
  width: 100%;
  overflow-x: scroll;
  white-space: nowrap;

  .card {
    display: inline-block;
    padding: 32px;
  }

  .genre-text {
    color: $color-pale-orange;
    font-weight: 600;
    font-size: 18px;
    min-width: 400px;
    position: absolute;
    margin: 0px 0px 0px 32px;
  }
}
</style>