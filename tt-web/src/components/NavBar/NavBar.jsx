import React, { useState } from "react";
import Link from "next/link";
import Logo from "@/components/logo/Logo";
import { GiHamburgerMenu } from "react-icons/gi";
import styles from "./NavBar.module.css";
import { useRouter } from "next/router";
import { handleModeSwitch } from "../../helpers/modeSwitch"

export default function NavBar() {
	const router = useRouter();
	const currentRoute = router.pathname;
  
  const [mode, setMode] = useState(true)
	const [menu, setMenu] = useState(false);

	const toggleMenu = () => {
		setMenu(!menu);
	};

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
								Home
							</Link>
						</li>
						<li
							className={`${styles.cabeceraLi} ${
								currentRoute === "/about" ? styles.cabeceraLiActive : ""
							}`}
						>
							<Link className={styles.cabeceraA} href="/about">
								About
							</Link>
						</li>
						<li
							className={`${styles.cabeceraLi} ${
								currentRoute === "/contact" ? styles.cabeceraLiActive : ""
							}`}
						>
							<Link className={styles.cabeceraA} href="/contact">
								Contact
							</Link>
						</li>
						<li>
							<label className={styles.switch} onChange={(e) => handleModeSwitch(e)}>
								<input type="checkbox"></input>
								<span className={styles.slider}></span>
							</label>
						</li>
					</ul>
				</nav>
			</header>
		</div>
	);
}
