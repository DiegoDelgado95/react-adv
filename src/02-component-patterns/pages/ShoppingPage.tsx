import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import { products } from "../data/products"

import '../styles/custom-styles.css'

const product = products[0]

export const ShoppingPage = () => {

  return (
    <div >
      <h1>Shopping Store</h1>
      <hr />

      <ProductCard
        key={product.id}
        product={product}
        className="bg-dark"
        initialValues={{
          count: 5,
          maxCount:10
        }}
      >
        {
          ({ increaseBy, isMaxCountReached, count, reset, maxCount }) => (
            <>
              <ProductImage className="custom-image" />
              <ProductTitle className="text-white text-bold" />
              <ProductButtons className="custom-buttons" />

              <button onClick={() => reset()}>Reset</button>
              <button onClick={() => increaseBy(-2)}>-2</button>
              { !isMaxCountReached && <button onClick={() => increaseBy(+2)}>+2</button>}
              <span>{ count } - { maxCount } </span>
            </>
          )
        }
      </ProductCard>
    </div>
  )
}