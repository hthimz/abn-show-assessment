import { API } from '@/services/api';

// const country = 'US';

export default {
  search(query, page) {
    const url = `search/shows?q=${query}&page=${page}`;
    return API.get(url);
  },
  getShowItemInfo(id) {
    const url = `/shows/${id}`;
    return API.get(url);
  },
  getShows(page) {
    const url = `shows?page=${page}`;
    return API.get(url);    
  },
};
