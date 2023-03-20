import React from 'react';
import Link from "next/link";
import Image from "next/image";
import AppStore from '../../assets/AppStore.svg';
import PlayStore from '../../assets/PlayStore.svg';
import styles from "./Stores.module.css";


export default function Stores () {
    return (
        <div className={`${styles.stores} flex `}>

            <Link href="/#">
                <div className={`${styles.store} center `}>
                    <Image src={AppStore} alt="Apple" />
                </div>
            </Link>
            <Link href="/#">
                <div className={`${styles.store} center `}>
                    <Image src={PlayStore} alt="Google" />
                </div>
            </Link>

        </div>
    )
}