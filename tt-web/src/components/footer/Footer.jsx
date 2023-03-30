import React from "react";
import Link from "next/link";
import SocialNetwork from "@/components/socialNetwork/SocialNetwork";
import Logo from "@/components/logo/Logo";
import Stores from "../stores/Stores";
import { BsFileTextFill, BsHeadset } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";
import styles from "./Footer.module.css";

export default function Footer({ url }) {
  return (
    <div className={styles.background}>
      <div className={`${styles.footer} centerComlumn `}>
        <div className={`${styles.container}  block__container `}>
          <div className={`${styles.containerOne} marginCenter jcspaceBetween`}>
            <SocialNetwork />
            <Logo />
            <div className={styles.storesContainer}>
              <Stores />
            </div>
          </div>

          <div className={`${styles.containerTwo} jcspaceBetween`}>
            <div className={`${styles.column} `}>
              <h3>Track Travel</h3>
              <Link href="/about">Nuestra historia</Link>
              <Link href="/faq">Preguntas frecuentes</Link>
            </div>
            <div className={`${styles.column} `}>
              <h3>Legal</h3>
              <Link href="/legales">Términos y condiciones</Link>
              <Link href="/legales/#privacidad">Aviso de privacidad</Link>
              <Link href="/legales/#legales">Avisos legales</Link>
            </div>
            <div className={`${styles.column} `}>
              <h3>¿Eres agencia?</h3>
              <Link href="/agency">Registra tu agencia</Link>
              <Link href="/agency">Beneficios</Link>
              <Link href="/agency">Publicidad</Link>
            </div>
            <div className={`${styles.column} `}>
              <h3>Contacto</h3>
              <Link
                href={ url }
                target="_blank">
                <RiWhatsappFill /> WhatsApp
              </Link>
              <Link href="mailto: info.tracktravel@gmail.com">
                <MdEmail /> Correo electrónico
              </Link>
              <Link href="/contact">
                <BsFileTextFill /> Déjanos un mensaje
              </Link>
              <Link href="/#">
                <BsHeadset /> Centro de ayuda Track Travel
              </Link>
            </div>
          </div>

          <div className={`${styles.textFinal} `}>
            <p>
              <span className={`${styles.marca} `}>Track Travel Inc</span>, our
              objective as a company is to revolutionize the organization of
              agencies regarding their local tours and trips. Offering security
              and confidence from the moment of the sale until the end of the
              journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
