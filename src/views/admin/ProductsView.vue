<script setup>
  import Link from '../../components/Link.vue';
  import Product from '../../components/Product.vue';
  import { useProductsStore } from '../../stores/products'

  const products = useProductsStore()
  
</script>

<template>
  <div>
    <Link to="new-product">Nuevo Producto</Link>
    <h1 class="text-4xl font-black my-10">Productos</h1>
    <p v-if="products.noResults">No Hay Productos</p>
    <ul
      v-else 
      role="list" 
      class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5"
    >
      <Product 
        v-for="product in products.productsCollection"
        :key="product.id"
        :product="product"
      />
    </ul>
    
  </div>
</template>

