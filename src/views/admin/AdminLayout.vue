<script setup>
import AdminNav from '@/components/AdminNav.vue';
import { RouterView } from 'vue-router';

  
</script>

<template>
  <AdminNav />
  <div class="pt-32 px-10 container  lg:min-h-screen">
    <RouterView />  
  </div>
</template>

