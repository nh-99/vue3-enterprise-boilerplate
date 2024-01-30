import { describe, it, expect } from 'vitest'

import { shallowMount } from '@vue/test-utils'
import AboutView from './AboutView.vue'

describe('AboutView', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(AboutView)
    expect(wrapper.text()).toContain('This is an about page')
  })
})
