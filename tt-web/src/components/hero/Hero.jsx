import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import heroImage from "../../assets/hero-image.png";
import styles from "./Hero.module.css";
import handleScroll from '@/helpers/HandleScroll';
import { useTranslation } from 'react-i18next';

const Hero = () => {
const [t] = useTranslation("global");




  return (
    <div className={styles.container}>
      <div className={styles.containerText}>
        <h1 className={styles.title}>{t("hero.title")}</h1>
        <Link href='#home-description' onClick={handleScroll}><button className={styles.button}>{t("hero.button")}</button></Link>
      </div>
      <Image priority={true} src={heroImage} className={styles.image} width={300} height={300} alt='Imagen principal de la pagina' />
    </div>
  );
}

export default Hero;
