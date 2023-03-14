import React from "react";
import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import styles from "./BackTotopButton.module.css";

export default function BackTotopButton() {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {backToTopButton && (
        <button className={styles.botonScroll} onClick={scrollUp}>
          <IoIosArrowUp />
        </button>
      )}
    </div>
  );
}
