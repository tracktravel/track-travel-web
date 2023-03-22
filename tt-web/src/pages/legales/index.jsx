
import React from 'react';
import styles from "./index.module.css";
import Link from 'next/link';


const Legales = () => {
    return (
        <div className={styles.container}>
        <div className={styles.about}>
            <h1 className={styles.title}>Terminos y Condiciones</h1>
            <p>TERMS AND CONDITIONS. </p>
            <Link href="/terminos.html">
            {/*<a target="_blank">Términos y Condiciones</a>*/}
            </Link>
        </div>
        </div>
    );
    }

export default Legales;
