import { shallowMount } from '@vue/test-utils'
import SearchInput from '@/components/SearchInput/SearchInput.vue'

describe('SearchInput.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(SearchInput, {
    })
    expect(wrapper.text())
  })
})
