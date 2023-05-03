import React, { useRef } from "react";
import Link from "next/link";
import SliderC from "react-slick";
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { data } from "./data";
import styles from "./SliderCard.module.css";
import { useTranslation } from "react-i18next";

export default function Slider() {
  const [t] = useTranslation("global");


  const sliderRef = useRef(null);
  const settings = {
    dots: true,
    adaptiveHeight: true,
    dotsClass: "slickDots lineIndicator",
    customPaging: (i) => (
      <div style={{ position: "absolute", top: "-10px", opacity: 0 }}>{i}</div>
    ),
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={`${styles.slider} `}>
      <div className={`${styles.container__buttons}`}>
        <div onClick={() => sliderRef.current.slickPrev()} >
          <IoIosArrowBack className={styles.buttons} />
        </div>
        <div onClick={() => sliderRef.current.slickNext()} >
          <IoIosArrowForward className={styles.buttons} />
        </div>
      </div>
      <div className={styles.title_slider1}>
          <div className={styles.title_container1}>
            <h3 className={`${styles.titlesPreParagraph}`}>{t("slider.firstSection.title")}</h3>
            <p  className={`${styles.titlesParagraph}`}>{t("slider.firstSection.description")}</p>
          </div>

          <div className={styles.slider__container_button_text}>
            <Link className={`${styles.btnGrad}`} href="/explore">{t("slider.firstSection.button")}</Link>
          </div>
      </div>

      <div className={`${styles.container__slider}`}>
        <SliderC
          {...settings}
          ref={sliderRef}
        >
          {data.map((item, key) => (
            <div key={key} className={`${styles.map} `}>
              <Image className={`${styles.imagen} `} src={item.image} alt={item.title} />
                <div className={`${styles.textCarousel} `}>
                  <h2 className={styles.textCarousel__title}>{item.title}</h2>
                </div>
            </div>
          ))}
        </SliderC>
      </div>

      <div className={styles.title_slider}>
        <div className={styles.slider__container_button_text}>
          <Link className={`${styles.btnGrad}`} href="/allies">{t("slider.firstSection.button")}</Link>
        </div>
        <div className={styles.title_container}>
          <h3 className={`${styles.titlesPreParagraph}`}>{t("slider.secondSection.title")}</h3>
          <p>{t("slider.firstSection.description")}</p>
        </div>
      </div>
    </div>
  );
};