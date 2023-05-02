import React, { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "@/components/logo/Logo";
import { GiHamburgerMenu } from "react-icons/gi";
import styles from "./NavBar.module.css";
import { useRouter } from "next/router";
import {useTranslation} from "react-i18next" 

export default function NavBar() {
	const router = useRouter();
	const currentRoute = router.pathname;

  const [t, i18next] = useTranslation("global")
	const [theme, setTheme] = useState(null)
	const [menu, setMenu] = useState(false);

	useEffect(() => {
		setTheme(localStorage.getItem("theme") === "light" ? false : true)
	},[])

	const toggleMenu = () => {
		setMenu(!menu);
	};

	const handleModeSwitch = (e) => {
		let mode = e.target.checked ? "dark" : "light"
		localStorage.setItem("theme", mode)
		let body = document.getElementById("switch")
		body.className = localStorage.getItem("theme")
		document.documentElement.setAttribute("data-theme", mode)
		setTheme(!theme)
	}

	return (
		<div className={styles.background}>
			<header className={styles.cabecera}>
				<div>
					<Logo />
				</div>

				<button onClick={toggleMenu} className={styles.cabeceraButton}>
					<GiHamburgerMenu className={styles.cabeceraSvg} />
				</button>

				<nav className={`${styles.cabeceraNav} ${menu ? styles.isActive : ""}`}>
					<ul className={styles.cabeceraUl}>
						<li
							className={`${styles.cabeceraLi} ${
								currentRoute === "/" ? styles.cabeceraLiActive : ""
							}`}
						>
							<Link className={styles.cabeceraA} href="/">
								{t("navbar.home")}
							</Link>
						</li>
						<li
							className={`${styles.cabeceraLi} ${
								currentRoute === "/about" ? styles.cabeceraLiActive : ""
							}`}
						>
							<Link className={styles.cabeceraA} href="/about">
								{t("navbar.about")}
							</Link>
						</li>
						<li
							className={`${styles.cabeceraLi} ${
								currentRoute === "/contact" ? styles.cabeceraLiActive : ""
							}`}
						>
							<Link className={styles.cabeceraA} href="/contact">
								{t("navbar.contact")}
							</Link>
						</li>
						<li>
							<label className={styles.switch} onChange={(e) => handleModeSwitch(e)}>
								<input type="checkbox" checked={theme}></input>
								<span className={styles.slider}></span>
							</label>
						</li>
					</ul>
				</nav>
			</header>
		</div>
	);
}
