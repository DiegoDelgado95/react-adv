import { useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from '../styles/styles.module.css'

// Al usar el useContext no recibo propiedades por ende no hace falta la interfaz
// interface ProductButtonsProps {
//     counter: number;
//     increaseBy: ( value:number ) => void;
// }
export interface Props {
    className?: string;
    style?: React.CSSProperties
}
export const ProductButtons = ({className, style}:Props) => {

    const { counter, increaseBy } = useContext( ProductContext );

    return (
        <div 
            className={`${styles.buttonsContainer} ${className}`}
            style={ style }
        >
            <button
                className={styles.buttonMinus}
                onClick={() => increaseBy(-1)}
            >
                -
            </button>

            <div className={styles.countLabel}>{counter}</div>

            <button
                className={styles.buttonAdd}
                onClick={() => increaseBy(1)}
            >
                +
            </button>
        </div>
    )
}