import React from "react";
import Image from "next/image";
import styles from "./Team.module.css";
import SocialNetwork from "../socialNetwork/SocialNetwork";
import { team } from "@/assets/Team/team";



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