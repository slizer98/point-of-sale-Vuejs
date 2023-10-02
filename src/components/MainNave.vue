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
      <Link to="admin" class="text-gray-700 font-black">Administrar</Link>
    </nav>
    
  </header>
</template>

