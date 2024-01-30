import { describe, it, expect } from 'vitest'

import { mount, config, shallowMount } from '@vue/test-utils'
import HomeView from './HomeView.vue'
import MainLayout from '@/router/layouts/MainLayout.vue'
import NavBar from '@/components/NavBar.vue'

config.global.stubs = {
  MainLayout
}

describe('HomeView', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(HomeView)
    // Assert that the text contains "Welcome!"
    expect(wrapper.text()).toContain('Welcome!')
  })
})
