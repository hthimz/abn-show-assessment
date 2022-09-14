import { shallowMount } from '@vue/test-utils'
import MovieCard from '@/components/movie-card/MovieCard.vue'



describe('MovieCard.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(MovieCard, {
      props: {
        imageUrl: 'url',
        name: 'John Show',
        summary: 'This has been a great show',
        id: 250,
        type: 'Scripted',
        year: '2014'
      },
    });
  });

  it('renders props when passed', () => {
    expect(wrapper.text()).toMatch('John Show',
      250, 'Scripted', '2014', 'This has been a great show', 'url')
  })

  it('renders component', () => {
    expect(wrapper.exists()).toBe(true);
  });
})
