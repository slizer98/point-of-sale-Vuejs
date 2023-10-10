<script setup>
  import Link from './Link.vue';
  import Logo from './Logo.vue'
import { RouterLink } from 'vue-router';

</script>

<template>
  <header class="px-10 py-5 bg-gray-700 flex justify-between items-center absolute top-0 w-full z-10">
    <router-link :to="{name: 'shop'}">
      <Logo />
    </router-link>


    <nav>
      <Link to="admin" class="text-gray-700 font-black">Administrar</Link>
    </nav>
    
  </header>
</template>

