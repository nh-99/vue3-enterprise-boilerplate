<script lang="ts" setup>
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <NavBar />
  <div :class="$style.container">
    <slot></slot>
  </div>
</template>

<style lang="scss" module>
.container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
