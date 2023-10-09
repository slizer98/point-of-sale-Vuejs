import { defineStore } from 'pinia'
import { computed } from 'vue'
import { useFirestore, useCollection, useFirebaseStorage } from 'vuefire'
import { 
    collection, 
    addDoc, 
    where, 
    query, 
    limit, 
    orderBy, 
    updateDoc, 
    doc, 
    getDoc,
    deleteDoc
 } from 'firebase/firestore'
import { ref as storageRef, deleteObject } from 'firebase/storage'
import Swal from 'sweetalert2'

export const useProductsStore = defineStore('products', () => {

    const db = useFirestore()
    const storage = useFirebaseStorage()

    const categories = [
        {id: 1, name: 'Sudaderas'},
        {id: 2, name: 'Tenis'},
        {id: 3, name: 'Lentes'}
    ]

    const q = query(
        collection(db, 'products'),
        orderBy('availability', 'asc')
    )
    const productsCollection = useCollection(q)

    async function createProduct(product) {
        await addDoc(collection(db, 'products'), product)
    }

    async function updateProduct(docRef, product) {
        const {image, url, ...values} = product

        if(image.length) {
            await updateDoc(docRef, {
                ...values, 
                image: url.value
            })

        } else {
            await updateDoc(docRef, values)
        }
    }

    async function deleteProduct(id) {
        try {
          const result = await Swal.fire({
            title: 'Estás Seguro?',
            text: "No podrás revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, Bórralo!'
          });
      
          if (result.isConfirmed) {
            Swal.fire(
              'Borrado!',
              'El producto ha sido eliminado.',
              'success'
            );
      
            const docRef = doc(db, 'products', id);
            const docSnap = await getDoc(docRef);
            const { image } = docSnap.data();
            const imageRef = storageRef(storage, image);
      
            await Promise.all([
              deleteDoc(docRef),
              deleteObject(imageRef)
            ]);
          }
        } catch (error) {
          console.error('Error al eliminar el producto:', error);
        }
    }
    const categoryOptions = computed(() => {
        const options = [
            {label: '--Seleccione--', value: '', attrs: {disabled: true} },
            ...categories.map(category => (
                {label: category.name, value: category.id}
            ))
        ]
        return options
    })

    const noResults = computed(() => productsCollection.value.length === 0)

    return {
        createProduct,
        updateProduct,
        deleteProduct,
        productsCollection,
        categoryOptions,
        noResults
    }
})