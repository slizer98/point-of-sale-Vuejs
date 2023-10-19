<script setup>
  import { useCouponStore } from '../stores/coupons';

  const store = useCouponStore()
  
</script>

<template>
  <p class="mt-5 py-5 font-bold border-t border-gray-200">Tienes un Cupón?</p>
  <div class="flex">
    <input 
      type="text"
      placeholder="Ingresa un cupón"
      class="p-2 bg-white border-gray-300 w-full"
      :class="store.couponInputValidation"
      v-model="store.couponInput"
    >
    <button 
      type="button"
      class="p-3 bg-green-400 font-bold"
      @click="store.applyCoupon"
    >Canjear</button>
  </div>
  <small :class="store.couponExists">{{ store.couponValidationMessage }}</small>
</template>

