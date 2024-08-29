import { useProduct } from '../hooks/useProduct'
import styles from '../styles/styles.module.css'

import { createContext } from 'react'
import {
  InitialValues,
  onChangeArgs,
  Product,
  ProductCardHandlers,
  ProductContextProps
} from '../interfaces/interfaces'

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

export interface Props {
  product: Product
  children: (args: ProductCardHandlers) => JSX.Element
  className?: string
  value?: number
  style?: React.CSSProperties
  onChange?: (args: onChangeArgs) => void
  initialValues?: InitialValues
}

export const ProductCard = ({
  product,
  children,
  className,
  value,
  style,
  onChange,
  initialValues
}: Props) => {
  const { counter, increaseBy, isMaxCountReached, maxCount, reset } =
    useProduct({
      onChange,
      product,
      value,
      initialValues
    })

  return (
    <Provider
      value={{
        product,
        counter,
        increaseBy,
        maxCount: initialValues?.maxCount
      }}
    >
      <div className={`${styles.productCard} ${className || ''}`} style={style}>
        {children({
          product: product,
          count: counter,
          maxCount: initialValues?.maxCount,
          isMaxCountReached,
          increaseBy,
          reset
        })}
      </div>
    </Provider>
  )
}
