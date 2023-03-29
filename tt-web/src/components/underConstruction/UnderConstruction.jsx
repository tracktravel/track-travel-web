import React from "react";
import Image from "next/image";
import image from "../../assets/under-construction.svg";
import styles from "./UnderConstruction.module.css";

const UnderConstruction = () => {
  return (
    <div className={styles.container}>
      <Image src={image} alt="A girl constructing a web page"/>
      <h1 className={styles.title}>Página en construcción</h1>
    </div>
  );
};

export default UnderConstruction;
