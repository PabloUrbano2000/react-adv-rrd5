import { useContext } from 'react'
import noImage from '../assets/no-image.jpg'
import styles from '../styles/styles.module.css'
import { ProductContext } from './ProductCard'

export interface Props {
  img?: string
  className?: string
  style?: React.CSSProperties
}

export const ProductImage = ({ img = '', className, style }: Props) => {
  const { product } = useContext(ProductContext)
  return (
    <img
      className={`${styles.productImg} ${className || ''}`}
      src={img || product.img || noImage}
      alt={product.title}
      style={style}
    />
  )
}
