import React from 'react'
import renderer from 'react-test-renderer'
import { ProductTitle, ProductCard } from '../../src/components';
import { product1 } from '../data/products';

describe('ProductTittle', () => {
  
    test('debe de mostrar el component con el titulo personalizado', () => { 
        const wrapper = renderer.create(
            <ProductTitle title="Custom Product" className="costume-class" />
        )
        expect( wrapper.toJSON() ).toMatchSnapshot()
     })

     test('debe de mostrar el componente con el nombre del producto', () => {
        const wrapper = renderer.create(
            <ProductCard product={product1}>
                {
                    () => (
                        <ProductTitle />
                    )
                }
            </ProductCard>
        )

        expect( wrapper.toJSON() ).toMatchSnapshot();
      })
});