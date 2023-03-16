import React, { useRef } from "react";
import Link from "next/link";
import SliderC from "react-slick";
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { data } from "./data";
import styles from "./SliderCard.module.css";


export default function Slider () {
    const sliderRef = useRef(null);

    return (
        <div className={`${styles.slider} `}>
            <div className={`${styles.container__buttons}`}>
                <div onClick={() => sliderRef.current.slickPrev()} >
                    <IoIosArrowBack className={styles.buttons}/>
                </div>
                <div onClick={() => sliderRef.current.slickNext()} >
                    <IoIosArrowForward className={styles.buttons}/>
                </div>
            </div>
            
            <h3 className={`${styles.h3}  `}>SIEMPRE TENDRAS EL CONTROL</h3>
            <div className={`jcspaceBetween`}>
                <p>No importa el lugar, seremos tu respealdo inteligente donde quiera que vayas</p>
                <button className={`${styles.btnGrad} `}>VER TODOS NUESTROS ALIADOS</button>
            </div>

            <div className={`${styles.container__slider}`}>
                <SliderC
                    dots
                    dotsClass="slickDots lineIndicator"
                    customPaging={ (i) => ( <div style={{ position: "absolute", top: "-10px", opacity: 0 }} >{i}</div> )}
                    ref={ sliderRef }
                    slidesToShow={ 3 }
                    slidesToScroll={ 3 }
                >
                    {data.map((item) => (
                        <div className={`${styles.map} `}>
                                <Image className={`${styles.imagen} `}  src={item.image} alt={item.alt}/>
                                <Link key={item} className={` ${styles.text} linkComponent `} href={item.link} target='_blank' rel='noreferrer noopener'>
                                <div className={`${styles.textCarousel} `}>
                                    <h2>{item.title}</h2>
                                </div>
                            </Link>
                        </div>
                    ))}
                </SliderC>
            </div>
            <div className={`${styles.text__final} center`}>
                <h2>Agencias en más 500 ciudades al rededor del mundo utilizan nuestra App</h2>
            </div>
        </div>
    );
};