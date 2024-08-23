import { useProduct } from '../hooks/useProduct'
import styles from '../styles/styles.module.css'

import { createContext } from 'react'
import { ProductCardProps, ProductContextProps } from '../interfaces/interfaces'
import { ProductButtons } from './ProductButtons'
import { ProductImage } from './ProductImage'
import { ProductTitle } from './ProductTitle'

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

export const ProductCard = ({ product, children }: ProductCardProps) => {
  const { counter, increaseBy } = useProduct()

  return (
    <Provider
      value={{
        product,
        counter,
        increaseBy
      }}
    >
      <div className={styles.productCard}>{children}</div>
    </Provider>
  )
}

// ProductCard.Title = ProductTitle
// ProductCard.Image = ProductImage
// ProductCard.Buttons = ProductButtons
