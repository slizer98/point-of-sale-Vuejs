<script setup>
  import Link from './Link.vue';
  import Logo from './Logo.vue'
</script>

<template>
  <header class="px-10 py-5 bg-gray-700 flex justify-between items-center absolute top-0 w-full z-10">
    <div>
      <Logo />
    </div>
  
    <nav>
      <RouterLink 
        :to="{name: 'products'}"
        class="rounded text-white font-bold p-2"
      > Productos</RouterLink>
      <RouterLink 
        :to="{name: 'sales'}"
        class="rounded text-white font-bold p-2"
      > Ventas</RouterLink>
      <Link to="shop" class="text-gray-700 font-black">Ir a Tienda</Link>
    </nav>
    
  </header>
</template>

