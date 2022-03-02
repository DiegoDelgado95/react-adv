# DO-Product-Card

Paquete de prueb de despliegue en NPM

## Diego Delgado

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'do-product-card';
```

```
    <ProductCard
        key={product.id}
        product={product}
        initialValues={{
          count: 5,
          maxCount:10
        }}
    > 
        {
          ({ increaseBy, isMaxCountReached, count, reset, maxCount }) => (
            <>
              <ProductImage />
              <ProductTitle />
              <ProductButtons />
            </>
          )
        }
    </ProductCard>
```