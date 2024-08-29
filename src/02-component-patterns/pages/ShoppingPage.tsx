import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle
} from '../components'
import { products } from '../data/products'
import { useShoppingCart } from '../hooks/useShoppingCart'

const product = products[0]

export const ShoppingPage = () => {
  const { shoppingCart, onProductCountChange } = useShoppingCart()

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <ProductCard
        key={product.id}
        product={product}
        initialValues={{
          count: 4,
          maxCount: 10
        }}
      >
        {({ reset, increaseBy, count, isMaxCountReached, maxCount }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
      </ProductCard>
    </div>
  )
}
