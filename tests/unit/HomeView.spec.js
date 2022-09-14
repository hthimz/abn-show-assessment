import { flushPromises, mount, shallowMount } from '@vue/test-utils'
// import MovieCard from '@/components/movie-card/MovieCard.vue'
import HomeView from '@/views/HomeView.vue'



describe('HomeView.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(HomeView);
  });

  it('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders Dashboard when showDashboardMovies is true', () => {
    const container = wrapper.find('.dashboard-list')
    expect(container.exists()).toBe(true)
  });


})
