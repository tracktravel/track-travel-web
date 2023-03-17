import Link from 'next/link';
import React from 'react';
import { FaRegUser } from 'react-icons/fa';
import styles from "./Register.module.css";


export default function Register () {

    return (
        <div className={`${styles.register}`}>
            <Link href="">
                <FaRegUser /> REGISTRO
            </Link>
        </div>
    );
};