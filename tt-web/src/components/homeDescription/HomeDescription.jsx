import React from "react";
import { BsShieldFillCheck, BsCheckCircleFill } from "react-icons/bs";
import { GiGears } from "react-icons/gi";
import { FaHandshake } from "react-icons/fa";
import styles from "./HomeDescription.module.css";

const HomeDescription = () => {
  return (
    <div className={styles.container} id='home-description'>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Track Travel</h1>
        <p className={styles.titleDescription}>
          Track Travel es una aplicación web que permite a los usuarios rastrear su historial de viajes. Los usuarios pueden crear una cuenta y iniciar sesión en su historial de viajes. También pueden ver su historial de viajes y editarlo.
        </p>
      </div>
      <div className={styles.divs}>
        <div>
          <div className={styles.cards}>
            <BsCheckCircleFill className={styles.items} />
            <h3>
              Simplicidad
            </h3>
          </div>
          <p>
            Track Travel permite a los usuarios rastrear su historial de viajes de una manera sencilla y fácil de usar.
          </p>
        </div>
        <div>
          <div className={styles.cards}>
            <BsShieldFillCheck className={styles.items} />
            <h3>
              Seguridad
            </h3>
          </div>
          <p>
            Track Travel es una aplicación web segura que permite a los usuarios rastrear su viaje sin preocuparse por la seguridad de sus datos.
          </p>
        </div>
        <div>
          <div className={styles.cards}>
            <GiGears className={styles.items} />
            <h3>
              Automatización
            </h3>
          </div>
          <p>
            Track Travel permite a los usuarios rastrear su viaje de manera automática, dejando la tarea de rastrear su viaje a la aplicación. De esta manera, los usuarios pueden concentrarse en disfrutar de su viaje.
          </p>
        </div>
        <div>
          <div className={styles.cards}>
            <FaHandshake className={styles.items} />
            <h3>
              Confianza
            </h3>
          </div>
          <p>
            Track Travel es una aplicación web que permite a los usuarios rastrear su viaje con confianza, ya que los datos de los usuarios están protegidos y no se comparten con terceros.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeDescription;