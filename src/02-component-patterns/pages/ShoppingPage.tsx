import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import { useShoppingCart } from "../hooks/useShoppingCart"
import '../styles/custom-styles.css'

export const ShoppingPage = () => {

  const { products, shoppingCart, onProductCountChange } = useShoppingCart()

  return (
    <div >
      <h1>Shopping Store</h1>
      <hr />

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>
        {
          products.map( prod => (
            <ProductCard 
              key={prod.id} 
              product={prod} 
              className="bg-dark"  
              onChange={  onProductCountChange }
              value={ shoppingCart[prod.id]?.count || 0  }
            >
                <ProductImage className="custom-image" />
                <ProductTitle className="text-white text-bold" />
                <ProductButtons className="custom-buttons" />
            </ProductCard>
          ))
        }

      </div>
      <div className="shopping-cart">
        {
          Object.entries(shoppingCart).map( ([key, productCart]) => (
            <ProductCard
              key={key}
              product={productCart}
              className="bg-dark"
              style={{ width: '100px' }}
              value={ productCart.count }
              onChange={  onProductCountChange }
            >
              <ProductImage className="custom-image" />
              <ProductButtons
                className="custom-buttons"
                style={{
                  display: 'flex',
                  justifyContent: 'center'
                }}
              />
            </ProductCard>
          ))
        }
      </div>
    </div>
  )
}