<script setup lang="ts">
import { RouterLink } from 'vue-router'
import routes from '@/router/routes'

const displayableRoutes = routes.filter((route) => route.meta?.navbarDisplay !== null)
</script>

<template>
  <ul :class="$style.navList">
    <li>Vue Enterprise Boilerplate</li>
    <li :class="$style.navListItem">
      <RouterLink
        :to="{ name: routerLink.name }"
        v-for="routerLink in displayableRoutes"
        :key="routerLink.name"
        >{{ routerLink.meta?.pageTitle }}</RouterLink
      >
    </li>
  </ul>
</template>

<style lang="scss" module>
.navList {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

.navListItem {
  float: left;

  &a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  &a:hover {
    background-color: #111;
  }
}
</style>
