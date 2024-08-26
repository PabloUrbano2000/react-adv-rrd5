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
      const newState = {
        ...state,
        [product.id]: { ...product, count }
      }
      if (count === 0) delete newState[product.id]
      return newState
    })
  }
  return {
    shoppingCart,
    onProductCountChange
  }
}
