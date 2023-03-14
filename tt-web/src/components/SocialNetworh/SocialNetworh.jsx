import React from 'react';
import { FaLinkedin, FaGithub} from 'react-icons/fa';
import {AiFillCodepenCircle} from "react-icons/ai";
import {BsPinterest} from "react-icons/bs";
import styles from "./SocialNetworh.module.css";


export default function SocialNetworh () {
  return (
    <div>
        <div className={styles.socialMedia}>
            <a href="https://www.linkedin.com/company/track-travel" target="_blank" rel="noreferrer noopener"><FaLinkedin className={styles.linkedin} /></a>
            <a href="https://codepen.io/CarlosMario-Pro" target="_blank" rel="noreferrer noopener"><AiFillCodepenCircle className={styles.codepen} /></a>
            <a href="https://github.com/tracktravel" target="_blank" rel="noreferrer noopener"><FaGithub className={styles.github} /></a>
            <a href="https://co.pinterest.com/CarlosMarioPro/" target="_blank" rel="noreferrer noopener"><BsPinterest className={styles.pinterest} /></a>
        </div >
    </div>
  );
};