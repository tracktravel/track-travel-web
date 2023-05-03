import React from "react";
import styles from "./index.module.css";
import aboutImg from "../../assets/about1.png";
import aboutImg2 from "../../assets/about2.png";
import Image from "next/image";
import Team from "@/components/team/Team";
import { useTranslation } from "react-i18next";

const About = () => {
	const [t] = useTranslation("global");

	return (
		<div className={styles.container}>
			<div className={styles.about}>
				<h1 className={styles.title}>{t("about.title")}</h1>
			</div>
			<div className={styles.p1}>
				<Image alt="Imagen Muestra" className={styles.p1Image} src={aboutImg} />
				<div>
					<h1>{t("about.firstSection.title")}</h1>
					<p>
					{t("about.firstSection.description")}
					</p>
				</div>
			</div>
			<div className={styles.p1}>
				<div>
					<h1>{t("about.secondSection.title")}</h1>
					<p>
					{t("about.firstSection.description")}{t("about.firstSection.description")}{" "}
					</p>
				</div>
				<Image
					alt="Imagen Muestra 2"
					className={styles.p2Image}
					src={aboutImg2}
				/>
			</div>
			<Team />
		</div>
	);
};

export default About;
