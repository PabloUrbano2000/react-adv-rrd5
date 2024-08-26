import { useState } from 'react'
import { Product } from '../interfaces/interfaces'

interface ProductInCart extends Product {
  count: number
}

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart
  }>({})

  const onProductCountChange = ({
    count,
    product
  }: {
    count: number
    product: Product
  }) => {
    setShoppingCart((state) => {
      // Forma controlada
      const productInCart: ProductInCart = state[product.id] || {
        ...product,
        count: 0
      }

      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count
        return {
          ...state,
          [product.id]: productInCart
        }
      }
      // Borrar el producto
      const { [product.id]: toDelete, ...rest } = state
      return rest

      // FORMA SENCILLA
      // const newState = {
      //   ...state,
      //   [product.id]: { ...product, count }
      // }
      // if (count === 0) delete newState[product.id]

      // return newState
    })
  }
  return {
    shoppingCart,
    onProductCountChange
  }
}
