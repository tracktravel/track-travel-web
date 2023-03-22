import React from 'react';
import { AiFillYoutube, AiFillInstagram } from 'react-icons/ai';
import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import styles from "./SocialNetwork.module.css";


export default function SocialNetwork ({team,gitHub,linkedin}) {
 return (
    <div className={`${styles.socialNetworks} AIflexEnd`}>
      {!team ? <div className={`${styles.borderSocialNetworks} center`}>
            <a className={`links`} href='https://www.facebook.com' target="_blank" rel="noreferrer noopener"><FaFacebookF className={styles.iconSocialNetworks} /></a>
        </div>: null}  
       {!team ? <div className={`${styles.borderSocialNetworks} center`}>
            <a className={`links`} href='https://www.instagram.com/track.travel.app/' target="_blank" rel="noreferrer noopener"><AiFillInstagram className={styles.iconSocialNetworks} /></a>
        </div>: null} 
        {/* <div className={`${styles.borderSocialNetworks} center`}>
            <a className={`links`} href='https://www.youtube.com' target="_blank" rel="noreferrer noopener"><AiFillYoutube className={styles.iconSocialNetworks} /></a>
        </div> */}
        <div className={`${styles.borderSocialNetworks} center`}>
            <a className={`links`}  href={!team ?'https://www.linkedin.com/company/track-travel/': linkedin}  target="_blank" rel="noreferrer noopener"><FaLinkedinIn className={!team? styles.iconSocialNetworks: styles.iconSocialNetworksBlack} /></a>
        </div>
        {!team?null:<div className={`${styles.borderSocialNetworks} center`}>
          <a href={gitHub} target="_blank" rel="noreferrer noopener"><FaGithub className={styles.iconSocialNetworksBlack} /></a>
        </div>}
    </div>
    );
};