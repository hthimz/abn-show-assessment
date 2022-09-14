// import { shallowMount } from '@vue/test-utils'

describe('Main', () => {
  it('Can mount app', () => {
    document.body.innerHTML = '<div id="app">' + '</div>';
    require('@/main');
    const pElement = document.getElementById('app')
    expect(pElement.textContent).toEqual('ABN-Shows');
  })
})
