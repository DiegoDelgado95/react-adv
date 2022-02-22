import { ProductCard as ProductCardHOC} from './ProductCard';
import { ProductTitle } from './ProductTitle';
import { ProductImage } from './ProductImage';
import { ProductButtons } from './ProductButtons';

export { ProductButtons } from './ProductButtons';
export { ProductImage } from './ProductImage';
export { ProductTitle } from './ProductTitle';

export const ProductCard = Object.assign( ProductCardHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons
});

export default ProductCard;