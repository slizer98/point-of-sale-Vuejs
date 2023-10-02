<script setup>
  import { RouterLink } from 'vue-router'

  defineProps({
    to: {
      type: String
    }
  })
  
</script>

<template>
  <RouterLink :to="{name: to}" class="rounded bg-green-400 hover:bg-green-500 font-bold py-2 px-10">
    <slot></slot>
  </RouterLink>
</template>

