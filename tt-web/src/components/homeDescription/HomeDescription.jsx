import React from "react";
import { BsShieldFillCheck, BsCheckCircleFill } from "react-icons/bs";
import { GiGears } from "react-icons/gi";
import { FaHandshake } from "react-icons/fa";
import styles from "./HomeDescription.module.css";
import { useTranslation } from "react-i18next";

const HomeDescription = () => {
  const [t] = useTranslation("global");

  return (
    <div className={styles.container} id='home-description'>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Track Travel</h1>
        <p className={styles.titleDescription}>
        {t("homeDescription.titleDescription")}
        </p>
      </div>
      <div className={styles.divs}>
        <div>
          <div className={styles.cards}>
            <BsCheckCircleFill className={styles.items} />
            <h3>
            {t("homeDescription.column1.title")}
            </h3>
          </div>
          <p>
          {t("homeDescription.column1.description")}
          </p>
        </div>
        <div>
          <div className={styles.cards}>
            <BsShieldFillCheck className={styles.items} />
            <h3>
            {t("homeDescription.column2.title")}
            </h3>
          </div>
          <p>
          {t("homeDescription.column2.description")}
          </p>
        </div>
        <div>
          <div className={styles.cards}>
            <GiGears className={styles.items} />
            <h3>
            {t("homeDescription.column3.title")}
            </h3>
          </div>
          <p>
          {t("homeDescription.column3.description")}
          </p>
        </div>
        <div>
          <div className={styles.cards}>
            <FaHandshake className={styles.items} />
            <h3>
            {t("homeDescription.column4.title")}
            </h3>
          </div>
          <p>
          {t("homeDescription.column4.description")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeDescription;