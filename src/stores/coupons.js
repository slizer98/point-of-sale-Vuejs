import { ref, watch } from 'vue'
import { defineStore } from 'pinia'

export const useCouponStore = defineStore('coupon', () => {

    const couponInput = ref('')
    const couponInputValidation = ref('')
    const couponValidationMessage = ref('')
    const couponExists = ref('')
    const discountPercentage = ref(0)
    
    const VALID_COUPONS = [
        {name: '10DESCUENTO', discount: .10},
        {name: '20DESCUENTO', discount: .20},
    ]

    watch(couponInput, () => {
        couponInputValidation.value = ''
        couponValidationMessage.value = ''
    })

    function applyCoupon() {
        if(VALID_COUPONS.some(coupon => coupon.name === couponInput.value)) {
            couponValidationMessage.value = 'Aplicando...'
            couponExists.value = 'text-green-500' 
            
            setTimeout(() => {
                discountPercentage.value = VALID_COUPONS.find(coupon => coupon.name === couponInput.value).discount
                couponInputValidation.value = 'border-green-500 text-green-500'
                couponValidationMessage.value = 'Descuento Aplicado'
            }, 3000);
            
        } else {
            couponInputValidation.value = 'border-red-500 text-red-500'
            couponValidationMessage.value = 'Cupon No Valido'
            couponExists.value = 'text-red-500' 
        }

        setTimeout(() => {
            couponValidationMessage.value = ''
        }, 6000);
        
    }
    
    return {
        couponInput,
        applyCoupon,
        couponInputValidation,
        couponValidationMessage,
        couponExists
    }
})