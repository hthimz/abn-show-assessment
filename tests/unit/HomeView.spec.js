import { flushPromises, mount, shallowMount } from '@vue/test-utils';
// import MovieCard from '@/components/movie-card/MovieCard.vue'
import HomeView from '@/views/HomeView.vue';
import { nextTick } from 'vue';


describe('HomeView.vue', () => {


  it('renders', () => {
    const wrapper = shallowMount(HomeView);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders Dashboard when showDashboardMovies is true', async () => {
    const wrapper = mount(HomeView);
    wrapper.vm.showDashboardMovies = true;
    await nextTick();
    expect(wrapper.find(".dashboard-list")).toBeTruthy();
  });

  it('renders Movie search List when showDashboardMovies is false', async () => {
    const wrapper = mount(HomeView);
    wrapper.vm.showDashboardMovies = false;
    await nextTick();
    expect(wrapper.find(".movies-list")).toBeTruthy();
  });

})
