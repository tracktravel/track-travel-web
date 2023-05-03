import React from "react";
import Image from "next/image";
import image from "../../assets/under-construction.svg";
import styles from "./UnderConstruction.module.css";
import { useTranslation } from "react-i18next";

const UnderConstruction = () => {
  const [t] = useTranslation("global")

  return (
    <div className={styles.container}>
      <Image src={image} priority alt="A girl constructing a web page"/>
      <h1 className={styles.title}>{t("underConstruction")}</h1>
    </div>
  );
};

export default UnderConstruction;
