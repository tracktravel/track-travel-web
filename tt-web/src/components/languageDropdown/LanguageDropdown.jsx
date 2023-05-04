import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./LanguageDropdonw.module.css";
import spain from "../../../public/flags/spain.png";
import brasil from "../../../public/flags/brasil.png";
import uk from "../../../public/flags/uk.png";
import Image from "next/image";
import { FaFlag, FaFlagCheckered } from "react-icons/fa";
import { FiFlag } from "react-icons/fi";

const LanguageDropdown = () => {
  const [t, i18next] = useTranslation("global");

  return (
    <select
      className={styles.select}
      onChange={(e) => i18next.changeLanguage(e.target.value)}
    >
      <option value="es">
        ES <FiFlag />
      </option>
      <option value="en">EN <FaFlag />  </option>
      <option value="pt">PT  <FaFlagCheckered /></option>
    </select>
  );
};

export default LanguageDropdown;
