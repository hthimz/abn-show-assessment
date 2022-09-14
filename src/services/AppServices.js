import { API } from '@/services/api';

// const country = 'US';

export default {
  //for get first page of movie searched
  search(query, page) {
    const url = `search/shows?q=${query}&page=${page}`;
    return API.get(url).catch(err => alert(err));
  },

  //to get details of specific movie
  getShowItemInfo(id) {
    const url = `/shows/${id}`;
    return API.get(url).catch(err => alert(err));
  },

  //fetch first 250 dashboard shows
  getShows(page) {
    const url = `shows?page=${page}`;
    return API.get(url).catch(err => alert(err));
  },
};
