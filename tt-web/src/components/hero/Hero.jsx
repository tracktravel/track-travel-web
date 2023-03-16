import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import heroImage from "../../assets/hero-image.png";
import styles from "./Hero.module.css";
import handleScroll from '@/helpers/HandleScroll';


const Hero = () => {
  return (
    <div className={`${styles.container} `}>
      <div className={styles.containerText}>
        <h1 className={styles.title}>Tours más inteligentes para tu agencia</h1>
        <Link href='#home-description' onClick={handleScroll}><button className={styles.button}>Saber más</button></Link>
      </div>
      <Image src={heroImage} className={styles.image} width={300} height={300} alt='Imagen principal de la pagina' />
    </div>
  );
}

export default Hero;
