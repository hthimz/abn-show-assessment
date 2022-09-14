import { flushPromises, shallowMount, mount } from '@vue/test-utils'
import { nextTick } from 'vue';
import SearchInput from '@/components/search-input/SearchInput.vue'

describe('SearchInput.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(SearchInput)
    expect(wrapper.exists()).toBe(true)
  })

  it('triggers setDashboardMoviesFromLocal when search is empty', () => {
    const wrapper = shallowMount(SearchInput)
    wrapper.vm.searchHandler();
    const emitterObject = wrapper.emitted();
    expect(Object.keys(emitterObject).indexOf('setDashboardMoviesFromLocal') !== -1).toBeTruthy()
  })

  it('checking v-bind of data value with input element', async () => {
    const wrapper = mount(SearchInput)
    wrapper.vm.search = 'search string';
    await nextTick();
    const input = wrapper.find('input');
    expect(input.element.value).toBe('search string');
  })
})
