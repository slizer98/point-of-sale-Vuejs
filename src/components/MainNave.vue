
<script setup>
  import Link from './Link.vue';
  import Logo from './Logo.vue'
  import { RouterLink } from 'vue-router';
  import { useProductsStore } from '@/stores/products';

  const products = useProductsStore()

</script>

<template>
  <header class="px-10 py-5 bg-gray-700 flex flex-col gap-5 md:flex-row lg:flex-row justify-between items-center absolute top-0 w-full z-10">
    <router-link :to="{name: 'shop'}">
      <Logo />
    </router-link>

    <div class="flex gap-5 text-white">
      <h2 class="text-lg hidden sm:block font-extrabold">Filtros:</h2>
      <div 
        v-for="category in products.categories"
        :key="category.id"
        class="flex items-center gap-2 flex-row" 
      >
        <input 
          type="radio" 
          name="category" 
          :value="category.id"
          class="h-4 w-4 rounded border-gray-300 text-green-400 focus:ring-green-500"
          :checked="products.selectedCategory === category.id"
          @change="products.selectedCategory = +$event.target.value"
        >
        <label class="text-gray-100">{{ category.name }}</label>
      </div>
    </div> 
    <nav>
      <Link to="admin" class="text-gray-700 font-black">Administrar</Link>
    </nav>
    
  </header>
</template>

