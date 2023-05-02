import React from 'react';
import Link from "next/link";
import Image from "next/image";
import logoTravel from "../../assets/logo.png";
import styles from "./Logo.module.css";
// implementando i18n
import {useTranslation} from "react-i18next" 

export default function Logo() {
    const [t, i18next] = useTranslation("global") // hook de i18n

    return (
        <Link href="/" className={`${styles.logo} center `}>
            <div className={`${styles.container} toTheRight `}>
                <Image width={'auto'} height={50} src={logoTravel} alt="Logo" />
                <h1>Track Travel</h1>
            </div>
            <select className={`${styles.select} toTheRight `} onChange={(e) => i18next.changeLanguage(e.target.value)}>
                <option value="es">ES</option>
                <option value="en">EN</option>
                <option value="pt">PT</option>
            </select>


{/* {t("title1")} */}

        </Link>
    );
};