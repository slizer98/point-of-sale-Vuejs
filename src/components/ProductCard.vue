<script setup>
import { formatCurrency } from '../helpers';


  defineProps({
    product: {
      type: Object
    }
  })

</script>

<template>
  <div class="bg-white shadow relative">
    <img :src="product.image" :alt="'imagen de' + product.name">

    <div class="p-3 space-y-2">
      <h2 class="text-xl font-black text-gray-500">{{ product.name }}</h2>
      <p class="text-gray-500">Disponibles: {{ product.availability }}</p>
      <p class="text-2xl font-extralight text-gray-900">{{formatCurrency(product.price)}}</p>
    </div>

    <button type="button" class="absolute top-5 -right-4">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 bg-green-400 hover:bg-green-500 hover:scale-125 transition-all duration-75 rounded-full text-white">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      
    </button>
    
  </div>
</template>
