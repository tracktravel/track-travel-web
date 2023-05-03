import React from 'react'
import styles from "./faqs.module.css";
import Image from 'next/image';
import faqs1 from '../../assets/faqs1.png'
import faqs2 from '../../assets/faqs2.png'
import { useTranslation } from 'react-i18next';

const index = () => {
  const [t] = useTranslation("global");

  return (
    <div className={styles.container}>
      <div className={styles.containerfaqs}>
        <h1>{t("faqs.mainTitle")}</h1>
        <Image alt="Faqs" className={styles.faqs} src={faqs1} />
      </div>

      <h2>{t("faqs.mainSubtitle")}</h2><br />

      <h2>{t("faqs.title1")}</h2>
      <p>{t("faqs.paragraph1")}</p><br /><br />

      <h2>{t("faqs.title2")}</h2>
      <p>{t("faqs.paragraph2")}</p><br /><br />

      <h2>{t("faqs.title3")}</h2>
      <p>{t("faqs.paragraph3")}</p><br /><br />

      <h2>{t("faqs.title4")}</h2>
      <p>{t("faqs.paragraph4")}</p><br /><br />

      <h2>{t("faqs.title5")}</h2>
      <p>{t("faqs.paragraph5")}</p><br /><br />

      <h2>{t("faqs.title6")}</h2>
      <p>{t("faqs.paragraph6")}</p><br /><br />

      <h2>{t("faqs.title7")}</h2>
      <p>{t("faqs.paragraph7")}</p><br /><br />

      <h2>{t("faqs.title8")}</h2>
      <p>{t("faqs.paragraph8")}</p><br /><br />

      <h2>{t("faqs.title9")}</h2>
      <p>{t("faqs.paragraph9")}</p><br /><br />

      <h2>{t("faqs.closeText")}</h2><br /><br />
    </div>
  )
}

export default index
