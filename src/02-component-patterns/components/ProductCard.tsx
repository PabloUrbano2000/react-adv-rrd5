import { useProduct } from '../hooks/useProduct'
import styles from '../styles/styles.module.css'

import { createContext } from 'react'
import {
  onChangeArgs,
  Product,
  ProductContextProps
} from '../interfaces/interfaces'

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

export interface Props {
  product: Product
  children?: React.ReactElement | React.ReactElement[]
  className?: string
  value?: number
  style?: React.CSSProperties
  onChange?: (args: onChangeArgs) => void
}

export const ProductCard = ({
  product,
  children,
  className,
  value,
  style,
  onChange
}: Props) => {
  const { counter, increaseBy } = useProduct({ onChange, product, value })

  return (
    <Provider
      value={{
        product,
        counter,
        increaseBy
      }}
    >
      <div className={`${styles.productCard} ${className || ''}`} style={style}>
        {children}
      </div>
    </Provider>
  )
}

// ProductCard.Title = ProductTitle
// ProductCard.Image = ProductImage
// ProductCard.Buttons = ProductButtons
