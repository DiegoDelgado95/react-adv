import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import '../styles/custom-styles.css'

const product = {
  id: '1',
  title: 'Coffe Mug - Card',
  img: './coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
    <div >
      <h1>Shopping Store</h1>
      <hr />

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>
        <ProductCard product={product} className="bg-dark">
            <ProductCard.Image className="custom-image" />
            <ProductCard.Title  className="text-white text-bold" title={'Pepe Test'}/>
            <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>

        <ProductCard product={product} className="bg-dark">
            <ProductImage className="custom-image" />
            <ProductTitle className="text-white text-bold" />
            <ProductButtons className="custom-buttons" />
        </ProductCard>

        <ProductCard 
          product={product} 
          style={{
            backgroundColor: '#70D1F8'
          }}
        >
            <ProductImage />
            <ProductTitle  style={{
            color: 'red'
          }}/>
            <ProductButtons  />
        </ProductCard>

      </div>
    </div>
  )
}