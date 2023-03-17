import React from 'react';
import Link from "next/link";
import SocialNetwork from "@/components/SocialNetwork/SocialNetwork";
import Logo from "@/components/Logo/Logo";
import Stores from "../Stores/Stores";
import { BsFillTelephoneFill, BsFileTextFill, BsHeadset } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { RiWhatsappFill } from 'react-icons/ri';
import styles from "./Footer.module.css";


export default function Footer() {
    return (
        <div className={`${styles.footer} centerComlumn `}>
            <div className={`${styles.container}  block__container `}>
                <div className={`${styles.containerOne} marginCenter jcspaceBetween`}>
                    <SocialNetwork />
                    <Logo />
                    <Stores />
                </div>

                <div className={`${styles.containerTwo} jcspaceBetween`}>
                    <div className={`${styles.column} `}>
                        <h3>Track Travel</h3>
                        <Link href="/#">Nuestra historia</Link>
                        <Link href="/#">Preguntas frecuentes</Link>
                        {/* <Link href="/#">Artículos de prensa</Link>
                        <Link href="/#">Blog Track Travel</Link>
                        <Link href="/#">Asociaciones</Link> */}
                    </div>
                    <div className={`${styles.column} `}>
                        <h3>Legal</h3>
                        <Link href="/#">Términos y condiciones</Link>
                        <Link href="/#">Aviso de privacidad</Link>
                        <Link href="/#">Avisos legales</Link>
                        {/* <Link href="/#">Artículos de prensa</Link> */}
                    </div>
                    <div className={`${styles.column} `}>
                        <h3>¿Eres agencia?</h3>
                        <Link href="/#">Registra tu agencia</Link>
                        <Link href="/#">Beneficios</Link>
                        <Link href="/#">Publicidad</Link>
                    </div>
                    <div className={`${styles.column} `}>
                        <h3>Contacto</h3>
                        <Link href="/#"><RiWhatsappFill /> WhatsApp</Link>
                        {/* <Link href="/#"><BsFillTelephoneFill /> Teléfono Fijo</Link> */}
                        <Link href="/#"><MdEmail /> Correo electrónico</Link>
                        <Link href="/#"><BsFileTextFill /> Déjanos un mensaje</Link>
                        <Link href="/#"><BsHeadset /> Centro de ayuda Track Travel</Link>
                    </div>
                </div>

                <div className={`${styles.textFinal} `}>
                    <p><span className={`${styles.marca} `}>Track Travel Inc</span>, our objective as a company is to revolutionize the organization of agencies regarding their local tours and trips. Offering security and confidence from the moment of the sale until the end of the journey. We are a young and energetic company.</p>
                </div>
            </div>
        </div>
    );
};