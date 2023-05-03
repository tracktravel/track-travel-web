import React from "react";
import styles from "./legales.module.css";
import Link from "next/link";
import Image from "next/image";
import terms from "../../assets/accept-terms.png";
import { useTranslation } from "react-i18next";

const Legales = () => {
  const [t] = useTranslation("global")

  return (
    <div className={styles.container}>
      <div className={styles.terminos}>
        <div className={styles.containerterms}>
          <h1 className={styles.title}>{t("terms.mainTitle")}</h1>
          <br />
          <br />
          <Image
            alt="Terminos y condiciones"
            className={styles.terms}
            src={terms}
          />
        </div>

        <h2>{t("terms.title1")}</h2>
        <p>
        {t("terms.description1")}
        </p>
        <br />
        <br />

        <h2>{t("terms.title2")}</h2>
        <p>
          {" "}
          {t("terms.description2.2.1")}
          <br />
          {t("terms.description2.2.2")}
          <br />
          {t("terms.description2.2.3")}
          <br />
          <br />
        </p>

        <h2>{t("terms.title3")}</h2>
        <p>
          {" "}
          {t("terms.description3")}
        </p>
        <br />
        <br />

        <h2>{t("terms.title4")}</h2>
        <p>
        {t("terms.description4.4.1")}
          <br />
          {t("terms.description4.4.2")}
          <br />
          {t("terms.description4.4.3")}
        </p>
        <br />
        <br />

        <h2>{t("terms.title5")}</h2>
        <p>
        {t("terms.description5")}
        </p>
        <br />
        <br />

        <h2>{t("terms.title6")}</h2>
        <p>
        {t("terms.description6")}
        </p>
        <br />
        <br />

        <h2>{t("terms.title7")}</h2>
        <p>
        {t("terms.description7")}
        </p>
        <br />
        <br />

        <h2>{t("terms.title8")}</h2>
        <p>
        {t("terms.description8")}
        </p>
        <br />
        <br />

        <h2>{t("terms.title9")}</h2>
        <p>
        {t("terms.description9")}
        </p>
        <br />
        <br />

        <h2>{t("terms.title10")}</h2>
        <p>
        {t("terms.description10")}
        </p>
        <br />
        <br />
      </div>
      <div className={styles.privacidad} id="privacidad">
        <h1 className={styles.title}>{t("terms.title11")}</h1>
        <p>
        {t("terms.description11")}
        </p>
        <br />
        <br />
      </div>
      <div className={styles.legales} id="legales">
        <h1 className={styles.title}>{t("terms.title12")}</h1>
        <p>
        {t("terms.description12")}
        </p>
      </div>
      <Link href="/terminos.html">
        {/*<a target="_blank">Términos y Condiciones</a>*/}
      </Link>
    </div>
  );
};

export default Legales;
