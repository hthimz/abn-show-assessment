<template>
    <input class="search-box" data-test="search-input" type="text" placeholder="What are you looking for ?"
        @input="betterSearch" v-model="search" />
</template>
<script>
import { ref } from 'vue';
import AppServices from '@/services/AppServices';
import { debounce } from '@/utils/helper';
import { constant } from '@/utils/constants';

export default {
    name: 'SearchInput',
    setup(props, context) {
        const search = ref("");

        const searchHandler = async () => {
            if (search.value) {
                const response = await AppServices.search(search.value, constant.seaerchShowsPageNumber);
                context.emit('updateMovies', response.data);
            } else {
                context.emit('setDashboardMoviesFromLocal');
            }
        }
        const betterSearch = debounce(searchHandler, 500);

        return {
            search,
            betterSearch,
            searchHandler
        }
    }
}
</script>

<style lang="scss" scoped>
input {
    display: block;
    appearance: none;
    border: none;
    outline: none;
    width: 100%;
    color: $color-white;
    background-color: $color-light-grey;
    font-size: 20px;
    padding: 10px 16px;
    border-radius: 8px;
    margin-bottom: 15px;
    transition: 0.4s;
    text-align: center;

    &::placeholder {
        color: $color-white-grey;
    }

    &:focus {
        box-shadow: $box-shadow-input;
    }
}
</style>
    