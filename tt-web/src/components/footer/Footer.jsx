import React from "react";
import Link from "next/link";
import SocialNetwork from "@/components/socialNetwork/SocialNetwork";
import Logo from "@/components/logo/Logo";
import Stores from "../stores/Stores";
import { BsFileTextFill, BsHeadset } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";
import styles from "./Footer.module.css";
import {useTranslation} from "react-i18next"

export default function Footer({ url }) {
  
  const [t, i18next] = useTranslation("global")
  
  return (
    <div className={styles.background}>
      <div className={`${styles.footer} centerComlumn `}>
        <div className={`${styles.container}  block__container `}>
          <div className={`${styles.containerOne} marginCenter jcspaceBetween`}>
            <SocialNetwork />
            <Logo />
            <div className={styles.storesContainer}>
              <Stores />
            </div>
          </div>

          <div className={`${styles.containerTwo} `}>
            <div className={`${styles.column} `}>
              <h3>Track Travel</h3>
              <Link href="/about">{t("footer.column1.history")}</Link>
              <Link href="/faqs">{t("footer.column1.faqs")}</Link>
            </div>
            <div className={`${styles.column} `}>
              <h3>{t("footer.column2.title")}</h3>
              <Link href="/legales">{t("footer.column2.terms")}</Link>
              <Link href="/legales/#privacidad">{t("footer.column2.privacy")}</Link>
              <Link href="/legales/#legales">{t("footer.column2.disclaimer")}</Link>
            </div>
            <div className={`${styles.column} `}>
              <h3>{t("footer.column3.title")}</h3>
              <Link href="/agency">{t("footer.column3.register")}</Link>
              <Link href="/agency">{t("footer.column3.benefits")}</Link>
              <Link href="/agency">{t("footer.column3.advertising")}</Link>
            </div>
            <div className={`${styles.column} `}>
              <h3>{t("footer.column4.title")}</h3>
              <Link href={url} target="_blank">
                <RiWhatsappFill /> WhatsApp
              </Link>
              <Link href="mailto: info.tracktravel@gmail.com">
                <MdEmail /> {t("footer.column4.email")}
              </Link>
              <Link href="/contact">
                <BsFileTextFill /> {t("footer.column4.message")}
              </Link>
              <Link href="/#">
                <BsHeadset /> {t("footer.column4.support")}
              </Link>
            </div>
          </div>

          <div className={`${styles.textFinal} `}>
            <p className={styles.objectiveText}>
              <span className={`${styles.marca} `}>Track Travel Inc</span>, {t("footer.finalmessage")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
