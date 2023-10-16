<script setup>
  import { useCartStore } from '../stores/cart';
  import ShoppingCartItem from './ShoppingCartItem.vue'
  const cart = useCartStore()
  
</script>

<template>
    <p v-if="cart.isEmpty" class="text-xl text-center text-gray-900 pt-9">El Carrito esta 
      vacio
    </p>
    <div v-else>
      <p class="text-4xl font-bold text-gray-900">Resumen de Venta</p>
      <ul role="list" class="mt-6 divide-y divide-gray-200 ">
        <ShoppingCartItem 
          v-for="item in cart.items"
          :key="item.id"
          :item="item"
        />
      </ul>
    </div>
</template>