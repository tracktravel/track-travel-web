import React, { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import logoTravel from "../../assets/logo.png";
import { GiHamburgerMenu } from 'react-icons/gi';
import styles from "./NavBar.module.css";


export default function NavBar () {
    const [activeSection, setActiveSection] = useState('aboutMe');
    const [ menu , setMenu ] = useState( false );

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    function handleScroll() {
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
                setActiveSection(section.getAttribute('id'));
            }
        });
    };

    function handleSectionClick(sectionName) {
        setActiveSection(sectionName);
        setMenu(false);

    };

    const toggleMenu = () => {
        setMenu( !menu )
    };


    return (
        <header className={styles.cabecera}>
          {/* Logo de la startup */}
            <div className={styles.containerLogo}>
              <Image width={'auto'} height={50} src={logoTravel} alt="Logo" />
              <h1>Track Travel</h1>
            </div>

            <button onClick={ toggleMenu } className={styles.cabeceraButton}>
                <GiHamburgerMenu className={styles.cabeceraSvg}/>
            </button>

            <nav className={ `${styles.cabeceraNav} ${ menu ? styles.isActive : '' }` }>
                <ul className={styles.cabeceraUl}>
                    <li className={`${styles.cabeceraLi} ${activeSection === 'home' ? styles.cabeceraLiActive : ''}`}>
                        <Link className={styles.cabeceraA} href="/" onClick={() => handleSectionClick('home')}>Home</Link>
                
                    </li>
                    <li className={`${styles.cabeceraLi} ${activeSection === 'about' ? styles.cabeceraLiActive : ''}`}>
                      <Link className={styles.cabeceraA} href="/about" onClick={() => handleSectionClick('about')}>About</Link> 
                    </li>
                    <li className={`${styles.cabeceraLi} ${activeSection === 'contact' ? styles.cabeceraLiActive : ''}`}>
                        <Link className={styles.cabeceraA} href="/contact" onClick={() => handleSectionClick('contact')}>Contact</Link>
                    </li>
                    {/* <li className={`${styles.cabeceraLi} ${activeSection === 'portfolio' ? styles.cabeceraLiActive : ''}`}>
                         <a className={`${styles.cabeceraA}`} href="#portfolio" onClick={() => handleSectionClick('portfolio')}>PORTAFOLIO</a> 
                    </li> */}
                </ul>
            </nav>
        </header>
    );
};










/*
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import logoTravel from "../../assets/logo.png";
import { GiHamburgerMenu } from 'react-icons/gi';
import styles from "./NavBar.module.css";


export default function NavBar () {
    const [activeSection, setActiveSection] = useState('aboutMe');
    const [ menu , setMenu ] = useState( false );

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    function handleScroll() {
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
                setActiveSection(section.getAttribute('id'));
            }
        });
    };

    function handleSectionClick(sectionName) {
        setActiveSection(sectionName);
        setMenu(false);

    };

    const toggleMenu = () => {
        setMenu( !menu )
    };


    return (
        <header className={styles.cabecera}>
          Logo de la startup
            <div className={styles.containerLogo}>
              <Image width={50} height={50} src={logoTravel} alt="Logo" />
            </div>

            <button onClick={ toggleMenu } className={styles.cabeceraButton}>
                <GiHamburgerMenu className={styles.cabeceraSvg}/>
            </button>

            <nav className={ `${styles.cabeceraNav} ${ menu ? styles.isActive : '' }` }>
                <ul className={styles.cabeceraUl}>
                    <li className={`${styles.cabeceraLi} ${activeSection === 'aboutMe' ? styles.cabeceraLiActive : ''}`}>
                        <Link className={styles.cabeceraA} href="#aboutMe" onClick={() => handleSectionClick('aboutMe')}>SOBRE MI</Link>
                
                    </li>
                    <li className={`${styles.cabeceraLi} ${activeSection === 'myServices' ? styles.cabeceraLiActive : ''}`}>
                      <Link className={styles.cabeceraA} href="#myServices" onClick={() => handleSectionClick('myServices')}>SERVICIOS</Link> 
                    </li>
                    <li className={`${styles.cabeceraLi} ${activeSection === 'skills' ? styles.cabeceraLiActive : ''}`}>
                        <a className={styles.cabeceraA} href="#skills" onClick={() => handleSectionClick('skills')}>SKILLS</a>
                    </li>
                    <li className={`${styles.cabeceraLi} ${activeSection === 'portfolio' ? styles.cabeceraLiActive : ''}`}>
                        <a className={`${styles.cabeceraA}`} href="#portfolio" onClick={() => handleSectionClick('portfolio')}>PORTAFOLIO</a>
                    </li>
                    <li className={`${styles.cabeceraLi} ${activeSection === 'formation' ? styles.cabeceraLiActive : ''}`}>
                        <a className={styles.cabeceraA} href="#formation" onClick={() => handleSectionClick('formation')}>FORMACION</a>
                    </li>
                    <li className={`${styles.cabeceraLi} ${activeSection === 'experience' ? styles.cabeceraLiActive : ''}`}>
                        <a className={styles.cabeceraA} href="#experience" onClick={() => handleSectionClick('experience')}>EXPERIENCIA</a>
                    </li>
                    <li className={`${styles.cabeceraLi} ${activeSection === 'testimonials' ? styles.cabeceraLiActive : ''}`}>
                        <a className={styles.CabeceraA} href="#testimonials" onClick={() => handleSectionClick('testimonials')}>TESTIMONIOS</a>
                    </li>
                    <li className={`${styles.cabeceraLi} ${activeSection === 'contact' ? styles.cabeceraLiActive : ''}`}>
                        <Link className={styles.cabeceraA} href="#contact" onClick={() => handleSectionClick('contact')}>CONTACTO</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};*/