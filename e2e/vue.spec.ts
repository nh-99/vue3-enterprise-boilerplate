import { expect, test } from './fixture.js'

// See here how to get started:
// https://playwright.dev/docs/intro
test('visits the app root url', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('div > p')).toHaveText('Welcome!')
  await expect(page.locator('div.greetings > h1')).toHaveText(
    'Hello World, from msw + Vue 3 Enterprise Boilerplate!'
  )
})
