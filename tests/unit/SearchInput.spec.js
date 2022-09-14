import { shallowMount } from '@vue/test-utils'
import { nextTick } from 'vue';
import SearchInput from '@/components/SearchInput/SearchInput.vue'

describe('SearchInput.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(SearchInput, {
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('triggers updateMovies when searchinput is there', async () => {

    const wrapper = shallowMount(SearchInput)
    // wrapper.vm.search = 'searching'
    // wrapper.vm.searchHandler();
    // await nextTick();
    // console.log("value printer",wrapper);
    // expect(wrapper.emitted().updateMovies).toBeTruthy();
    // const sho = wrapper;
    console.log("getting rapper", wrapper.html());
    console.log("getting rapper.VM", wrapper.vm);
    // await nextTick()
    // wrapper.vm .searchHandler();
    // expect(wrapper.emitted().setDashboardMoviesFromLocal).toBe(true)
  })
})
