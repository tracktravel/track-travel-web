import React from 'react';
import { AiFillYoutube, AiFillInstagram } from 'react-icons/ai';
import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import styles from "./SocialNetwork.module.css";


export default function SocialNetwor () {
  return (
    <div className={`${styles.socialNetworks} AIflexEnd`}>
        <div className={`${styles.borderSocialNetworks} center`}>
            <a className={`links`} href='https://www.facebook.com' target="_blank" rel="noreferrer noopener"><FaFacebookF className={styles.iconSocialNetworks} /></a>
        </div>
        <div className={`${styles.borderSocialNetworks} center`}>
            <a className={`links`} href='https://www.instagram.com' target="_blank" rel="noreferrer noopener"><AiFillInstagram className={styles.iconSocialNetworks} /></a>
        </div>
        <div className={`${styles.borderSocialNetworks} center`}>
            <a className={`links`} href='https://www.youtube.com' target="_blank" rel="noreferrer noopener"><AiFillYoutube className={styles.iconSocialNetworks} /></a>
        </div>
        <div className={`${styles.borderSocialNetworks} center`}>
            <a className={`links`} href='https://www.linkedin.com/company/track-travel/' target="_blank" rel="noreferrer noopener"><FaLinkedinIn className={styles.iconSocialNetworks} /></a>
        </div>
        <div className={`${styles.borderSocialNetworks} center`}>
          <a href="https://github.com/tracktravel" target="_blank" rel="noreferrer noopener"><FaGithub className={styles.iconSocialNetworks} /></a>
        </div>
    </div>
    );
};