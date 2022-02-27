import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";
import { products } from '../data/products';

export const useShoppingCart = () => {
    const [shoppingCart, setShoppingCart] = useState<{ [key:string]: ProductInCart }>({});

    const onProductCountChange = ({ count, product }: { count:number, product: Product}) => {
      console.log('onProductCountChange',count , product)
  
      setShoppingCart(oldShoppngCart => {
  
        //FORMA 2
        const productInCart: ProductInCart = oldShoppngCart[product.id] || { ...product, count:0 }
        if( Math.max( productInCart.count + count, 0 ) > 0 ){
          productInCart.count = productInCart.count + count;
          return {
            ...oldShoppngCart,
            [product.id]: productInCart
          }
        }
  
        //Borrar el producto
        const { [product.id]: toDelete, ...rest } = oldShoppngCart;
        return rest;
  
        //FORMA 1
        //forma fernando
        // if (count === 0) {
        //   const { [product.id]: toDelete, ...rest } =  oldShoppngCart
        //   return rest;
        // }
  
        // // Mi forma
        // // if (count <= 0) {
        // //   delete oldShoppngCart[product.id]
        // //   return { ...oldShoppngCart }
        // // }
  
        // return {
        //   ...oldShoppngCart,
        //   [product.id]: { ...product, count }
        // }
  
      })
    }

    return {
        shoppingCart, 
        onProductCountChange,
        products
    }
}
