import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import MainLayout from './MainLayout.vue'

describe('Main', () => {
  it('renders properly', () => {
    const wrapper = mount(MainLayout)
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
