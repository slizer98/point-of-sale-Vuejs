import { defineStore} from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', ()=> {

    const items = ref([])

    const  MAX_PRODUCTS = 5

    function addItem(item) {
        items.value.push({...item, quantity: 1, id: item.id})
    }

    function updateQuantity(id, quantity) {
        items.value = items.value.map(item => item.id === id ? {...item, quantity} : item)
    }
    
    const isEmpty = computed(() => items.value.length === 0)

    const checkProductAvailability = computed(() => {
        return (product) => product.availability < MAX_PRODUCTS ? product.availability : MAX_PRODUCTS
    })
    
    return {
        items,
        addItem,
        isEmpty,
        checkProductAvailability,
        updateQuantity
    }
})