import React from "react";
import {BsShieldFillCheck, BsCheckCircleFill, BsController} from "react-icons/bs";
import { GiGears } from "react-icons/gi";
import { FaHandshake } from "react-icons/fa";
import styles from "./HomeDescription.module.css";

const HomeDescription = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>Track Travel</h2>
        <p className={styles.titleDescription}>
        Track Travel es una aplicación web que permite a los usuarios rastrear su historial de viajes. Los usuarios pueden crear una cuenta y iniciar sesión en su historial de viajes. También pueden ver su historial de viajes y editarlo.
        </p>
      </div>
      <div className={styles.divs}>
        <div>
          <h3>
            <BsCheckCircleFill className={styles.items}/>
            Simplicidad
          </h3>
          <p>
          Track Travel permite a los usuarios rastrear su historial de viajes de una manera sencilla y fácil de usar. 
          </p>
        </div>
        <div>
          <h3>
            <BsShieldFillCheck className={styles.items}/>
            Seguridad
          </h3>
          <p>
          Track Travel es una aplicación web segura que permite a los usuarios rastrear su viaje sin preocuparse por la seguridad de sus datos.
          </p>
        </div>
        <div>
          <h3>
            <GiGears className={styles.items}/>
            Automatización
          </h3>
          <p>
          Track Travel permite a los usuarios rastrear su viaje de manera automática, dejando la tarea de rastrear su viaje a la aplicación. De esta manera, los usuarios pueden concentrarse en disfrutar de su viaje.
          </p>
        </div>
        {/* <div>
          <h3>
            <BsController className={styles.items}/>
            Control
          </h3>
          <p>
          Track Travel permite a los usuarios tener control del viaje que están realizando, ya que pueden ver el viaje de manera visual en un mapa.
          </p>
        </div> */}
        <div>
          <h3>
            <FaHandshake className={styles.items}/>
            Confianza
          </h3>
          <p>
          Track Travel es una aplicación web que permite a los usuarios rastrear su viaje con confianza, ya que los datos de los usuarios están protegidos y no se comparten con terceros.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeDescription;