import React from 'react'
import renderer from 'react-test-renderer'
import { ProductCard, ProductImage } from '../../src/components'
import { product2 } from '../data/products'

describe('ProductImage', () => {
    test('debe de mostrar el componente con la url de la imagen', () => { 
        const wrapper = renderer.create(
            <ProductImage img='https://thumbs.dreamstime.com/b/ejemplo-de-coffe-61914260.jpg' />
        )
        
        expect( wrapper.toJSON() ).toMatchSnapshot();
    });

    test('debe de mostrar el componente con la imagen del producto', () => { 
        const wrapper = renderer.create(
            <ProductCard product={product2}>
                {
                    () => (
                        <ProductImage />
                    )
                }
            </ProductCard>
        )

        expect( wrapper.toJSON() ).toMatchSnapshot();
    })
})