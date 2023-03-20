import React from 'react';
import Image from "next/image";
import logo from '../../assets/Whatsapp.png';
import styles from "./WhatsApp.module.css";


export default function WhatsApp () {

    return (
        <div className={styles.whatsappLanding}>
            <a href="https://web.whatsapp.com/send?phone=5521994046975&text=Hola," target="_blank" rel="noreferrer noopener">
                <Image className={styles.whatsapp} src={logo} alt="Logo WhatsApp" />
            </a>
        </div>
    )
};