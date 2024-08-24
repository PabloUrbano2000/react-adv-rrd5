import { Props as ProductCardProps } from '../components/ProductCard'
import { Props as ProductImageProps } from '../components/ProductImage'
import {
  Props as ProductButtonsProps,
  Props as ProductTitleProps
} from '../components/ProductTitle'

export interface Product {
  id: string
  title: string
  img?: string
}

export interface ProductContextProps {
  counter: number
  increaseBy: (value: number) => void
  product: Product
}

export interface ProductCardHOCProps {
  (props: ProductCardProps): JSX.Element
  Title: (props: ProductTitleProps) => JSX.Element
  Image: (props: ProductImageProps) => JSX.Element
  Buttons: (props: ProductButtonsProps) => JSX.Element
}
