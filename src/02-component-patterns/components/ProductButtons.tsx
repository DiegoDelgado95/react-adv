import { useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from '../styles/styles.module.css'

// Al usar el useContext no recibo propiedades por ende no hace falta la interfaz
// interface ProductButtonsProps {
//     counter: number;
//     increaseBy: ( value:number ) => void;
// }

export const ProductButtons = () => {

    const { counter, increaseBy } = useContext( ProductContext );

    return (
        <div className={styles.buttonsContainer}>
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