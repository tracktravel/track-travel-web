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
        Track Travel es una aplicación web/móvil que facilita todas las interacciones entre Agencias y turistas alrededor del mundo. Entre las funcionalidades más importantes podemos mencionar. Rastreo de transportes, comunicación directa entre las partes, servicio de venta seguro e informaciones estadísticas recolectadas para mejorar la performance de la empresa prestadora de servicios. Track Travel llegó para recolocar un nuevo padrón de servicio, llevando tu Agencia de turismo a un nuevo nivel.
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
          Esta aplicación fue pensada para ser totalmente intuitiva. Ya seas una agencia asociada o un turista, en cuestión de pocos minutos, es posible entender y utilizar todas las herramientas ofrecidas. Y si de cualquier forma surgen dudas contamos con videos explicativos y atención al cliente para ayudarte con lo que necesites.
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
          En vez de intentar recrear la rueda, optamos por trabajar con empresas de gran renombre a la hora de trabajar con datos de carácter sensible.
          Todas sus operaciones financieras dentro de nuestro sitio son procesadas de manera externa de punta a punta. Del resto nos encargamos nosotros.
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
          ¿Ya imaginaste, como empresa, contar de manera automática con estadísticas precisas de desempeño? Trabajando con nuestra aplicación será cuestión de un par de clicks tener informaciones como:
          estadísticas financieras, cantidad de pasajeros transportados, localización aproximada de puntos fuertes de venta, kilómetros recorridos por sus transportes, desempeño de sus guías, etc.
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
          Track Travel es una empresa en constante evolución que busca transmitir confianza ofreciendo solidez en nuestra propuesta como en nuestro compromiso diario de crecimiento empresarial.
          Sabemos que crecer es más fácil acompañados y queremos invitarte a ser parte de esta aventura. El cielo es el límite.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeDescription;