<script setup>
  import { storeToRefs } from 'pinia'
  import MainNaveVue from '../components/MainNave.vue';
  import ProductCard from '../components/ProductCard.vue';
  import ShoppingCart from '../components/shoppingCart.vue';
  import { useProductsStore } from '../stores/products'

  const products = useProductsStore()
  const { filteredProducts, noResults } = storeToRefs(products)
 
</script>

<template>
    <MainNaveVue />
    <main class="pt-10 lg:flex lg:h-screen lg:overflow-y-hidden">
      <div class="lg:w-2/3 lg:h-screen lg:overflow-y-scroll p-32 sm:py-20 pb-32 px-10">
        <p v-if="noResults" class="text-center text-4xl">No Hay Productos</p>
        <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-2 gap-5">
          <ProductCard 
            v-for="product in filteredProducts"
            :key="product.id"
            :product="product"
          />
        </div>
      </div>
      <aside class="lg:w-1/3 lg:screen lg:overflow-y-scroll pt-10 pb-32 px-10">
        <ShoppingCart/>
      </aside>
    </main>
</template>

