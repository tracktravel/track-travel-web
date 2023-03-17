import React from 'react';
import Link from "next/link";
import Image from "next/image";
import logoTravel from "../../assets/logo.png";
import styles from "./Logo.module.css";


export default function Logo () {
    return (
        <Link href="/#" className={`${styles.logo} center `}>
            <div className={`${styles.container} center `}>
                <Image width={'auto'} height={50} src={logoTravel} alt="Logo" />
                <h1>Track Travel</h1>
            </div>
        </Link>
    );
};