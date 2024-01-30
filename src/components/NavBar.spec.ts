import { describe, it, expect } from 'vitest'

import { shallowMount } from '@vue/test-utils'
import NavBar from './NavBar.vue'

describe('NavBar', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(NavBar)
    expect(wrapper.text()).toContain('Vue Enterprise Boilerplate')
  })
})
