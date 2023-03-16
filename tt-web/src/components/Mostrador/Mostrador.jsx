import React from 'react';
import Image from 'next/image';
import Image1 from '../../assets/Slider/Cocora.jpg';
import Image2 from '../../assets/Slider/Samaná.jpg';
import Image3 from '../../assets/Slider/Dubai.jpg';
import styles from "./Mostrador.module.css";


export default function Mostrador () { 
    return (
        <div className={`${styles.mostrador} centerColumn`}>
            <h1>Viaja con confianza, nuestras agencias aliadas están presentes en más de 150 países</h1>
            <div className={`${styles.card__container} center`}>
                <div className={`${styles.card} `}>
                    <Image className={`${styles.image}`} src={Image1} alt="" />
                    <div className={`${styles.text} `}>
                        <h3>Colombia</h3>
                        <p>Valle del Cocora</p>
                    </div>
                </div>
                <div className={`${styles.card} `}>
                    <Image className={`${styles.image}`} src={Image2} alt="" />
                    <div className={`${styles.text} `}>
                        <h3>República Dominicana</h3>
                        <p>Samaná</p>
                    </div>
                </div>
                <div className={`${styles.card} `}>
                    <Image className={`${styles.image}`} src={Image3} alt="" />
                    <div className={`${styles.text} `}>
                        <h3>Emiratos Árabes Unidos</h3>
                        <p>Dubái</p>
                    </div>
                </div>
            </div>
        </div>
    );
};