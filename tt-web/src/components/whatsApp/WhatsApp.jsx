import React from 'react';
import Image from "next/image";
import logo from '../../assets/Whatsapp.png';
import styles from "./WhatsApp.module.css";

export default function WhatsApp( { url } ) {
    
    return (
        <div className={styles.whatsappLanding}>
            <a href={ url } target="_blank" rel="noreferrer noopener">
                <Image className={styles.whatsapp} src={logo} alt="Logo WhatsApp" />
            </a>
        </div>
    )
}; 