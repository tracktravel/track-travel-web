import React from 'react';
import Image from 'next/image'
import heroImage from "../../assets/hero-image.png";
import styles from "./Hero.module.css"

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerText}>
        <h1 className={styles.title}>Tours más inteligentes como nunca antes para tu agencia</h1>
        <button className={styles.button}>Sepa como</button>
      </div>
      <Image src={heroImage} width={500} height={500} alt='Imagen principal de la pagina'/>
    </div>
  );
}

export default Hero;
