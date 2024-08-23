import { useContext } from 'react'
import noImage from '../assets/no-image.jpg'
import styles from '../styles/styles.module.css'
import { ProductContext } from './ProductCard'

export const ProductImage = ({ img = '' }) => {
  const { product } = useContext(ProductContext)
  return (
    <img
      className={styles.productImg}
      src={img || product.img || noImage}
      alt={product.title}
    />
  )
}
