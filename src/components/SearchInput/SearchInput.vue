<template>
    <input class="search-box" data-test="search-input" type="text" placeholder="What are you looking for ?" @input="betterSearch" v-model="search"/>
  </template>
  <script>
    // @ is an alias to /src
    import {ref} from 'vue';
    import AppServices from '@/services/AppServices';
    import { debounce } from '@/utils/helper';

    export default {
    setup(props,context){  
    const search = ref("");

    const searchHandler= async()=>{
        if(search.value != ""){
            const response = await AppServices.search(search.value,1);
            context.emit('updateMovies', response.data);
        }else{
            context.emit('setDashboardMoviesFromLocal');
        }
    }
    const betterSearch = debounce(searchHandler,500);

    return {
        search,
        betterSearch
    }
}
    }
</script>

<style lang="scss" scoped>
input{
display: block;
appearance: none;
border: none;
outline: none;
width: 100%;
color: #FFF;
background-color: #496583;
font-size: 20px;
padding: 10px 16px;
border-radius: 8px;
margin-bottom: 15px;
transition: 0.4s;
text-align: center;
&::placeholder {
    color: #f3f3f3;
}
&:focus {
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
}
}
</style>
    