import { describe, it, expect } from 'vitest'

import { shallowMount } from '@vue/test-utils'
import MainLayout from './MainLayout.vue'

describe('Main', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(MainLayout)

    setTimeout(() => {
      expect(wrapper.text()).toContain('Vue Enterprise Boilerplate')
    }, 1000)
  })
})
