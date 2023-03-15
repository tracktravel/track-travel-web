import React from 'react';
import { FaRegUser } from 'react-icons/fa';
import styles from "./Login.module.css";


export default function Login () {

    return (
        <div className={`${styles.login}`}>
            <a href="/#">
                <FaRegUser /> INICIAR SESION
            </a>
        </div>
    );
};