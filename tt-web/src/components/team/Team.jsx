import React from "react";
import Image from "next/image";
import styles from "./Team.module.css";
import SocialNetwork from "../socialNetwork/SocialNetwork";

const team = [
  {
    name: "David Ezequiel Cunha Quinteros",
    rol: "Estética y estructura de front",
    linkedin: "https://www.linkedin.com/in/david-cunha-quinteros/",
    github: "https://github.com/regenerik",
    image: "/team/david.jpg",
  },
  {
    name: "Emiliano Villa",
    rol: "Backend",
    linkedin: "https://www.linkedin.com/in/emiliano-villa-686364241/",
    github: "https://github.com/e0212",
    image: "/team/emiliano.jpg",
  },
  {
    name: "Tomás Arregui Bellino",
    rol: "Backend",
    linkedin: "https://www.linkedin.com/in/tomasarreguib/",
    github: "https://github.com/noisyBrain",
    image: "/team/tomi.jpg",
  },
  {
    name: "Florencia Fernandez",
    rol: "Frontend",
    linkedin:
      "https://www.linkedin.com/in/florencia-fernandez-fullstack-developer/",
    github: "https://github.com/FlorenciaF1",
    image: "/team/flor.jpg",
  },
  {
    name: "Andres Felipe Pastor Ferrer",
    rol: "Backend",
    linkedin:
      "https://www.linkedin.com/in/andres-felipe-pastor-ferrer-8080b01ab/",
    github: "https://github.com/MrAleew",
    image: "/team/andres.jpg",
  },
  {
    name: "Alan Delgado",
    rol: "Backend",
    linkedin: "https://www.linkedin.com/in/alan-delgado8/",
    github: "https://github.com/alandelgado10",
    image: "/team/alan.jpg",
  },
  {
    name: "Geovanni Casadiegos Rodriguez",
    rol: "Backend",
    linkedin:
      "https://www.linkedin.com/in/geovanny-casadiegos-rodriguez-86154a143/",
    github: "",
    image: "/team/geo.jpg",
  },
  {
    name: "Carlos Mario Reyes Pena",
    rol: "Full Stack",
    linkedin: "https://www.linkedin.com/in/carlosmario-pro/",
    github: "https://github.com/CarlosMario-Pro",
    image: "/team/carlosmario.png",
  },
  {
    name: "Matias Ezequiel Santero Ojeda",
    rol: "Diseño UX/UI Marketing",
    linkedin: "https://www.linkedin.com/in/matias-santero-ojeda/",
    github: "",
    image: "/team/mati.jpg",
  },
  {
    name: "Bastián Alberto Garces Galvez",
    rol: "Full Stack",
    linkedin: "https://www.linkedin.com/in/bastian-garces-759a81140",
    github: "https://github.com/MrSix13",
    image: "/team/bastian.jpg",
  },
  {
    name: "Hernan Javier Rinaldi",
    rol: "Frontend",
    linkedin: "https://www.linkedin.com/in/hernan-javier-rinaldi/",
    github: "https://github.com/HernanRinaldi",
    image: "/team/herni.jpg",
  },
  {
    name: "Federico Birman",
    rol: "Frontend",
    linkedin: "https://www.linkedin.com/in/federico-birman-b11695269/",
    github: "https://github.com/02fede02",
    image: "/team/fede.jpg",
  },
  {
    name: "Luis Carlos Rangel Lagunes",
    rol: "Full Stack",
    linkedin: "https://www.linkedin.com/in/luisrangel-lagunes/",
    github: "https://github.com/luisillo619",
    image: "/team/luiscarlos.jpg",
  },
  {
    name: "Juan Cruz Laumann",
    rol: "Frontend",
    linkedin: "https://www.linkedin.com/in/juan-cruz-laumann-7775a3238/",
    github: "https://github.com/JuanCruzL",
    image: "/team/juan1.png",
  },
];

const Team = () => {
  return (
    <div className={styles.container}>
      {team.map((person, index) => (
        <div key={index} className={styles.container__card}>
          <Image
            className={styles.container__image}
            width={200}
            height={200}
            src={person.image}
            alt={person.name}
          />
          <div className={styles.container__card_info}>
            <div className={styles.container__card_info_data}>
              <h1>{person.name}</h1>
              <h2>{person.rol}</h2>
            </div>
            <div className={styles.container__card_info_socialNetwork}>
              <SocialNetwork
                team={true}
                gitHub={person.github}
                linkedin={person.linkedin}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Team;