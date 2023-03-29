import React from 'react';
import styles from "./index.module.css"
import aboutImg from '../../assets/about1.png'
import aboutImg2 from '../../assets/about2.png'
import Image from 'next/image';
import Team from '@/components/team/Team';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.about}>
        <h1 className={styles.title}>About</h1>
      </div>
      <div className={styles.p1}>
        <Image alt="Imagen Muestra" className={styles.p1Image} src={aboutImg} />
        <div>
          <h1>Nuestra historia</h1>
          <p>Nuestra historia no data de hace muchos años, pero orgullosamente si acarrea muchísima energía y voluntades individuales alineadas para brindarte el mejor servicio posible.
            Hace solo pocos meses comenzamos a aliarnos con un objetivo común de superación y aprendizaje.
            Hoy nos encontramos trabajando de forma constante en una solución práctica y puntual para todas las agencias de turismo del mundo.
            Sí, del mundo. Y orgullosamente llevamos toda esta ambición adelante.
            Desde Río de Janeiro nace la idea, después de la observación de múltiples agencias con problemas de gestión en su día a día.
            Luego de un estudio más profundo respecto a estas falencias, comenzamos a conformar nuestro equipo. Algunos somos amigos de estudios, otros, graduados recientemente de una escuela en común de programación, y así, poco a poco, terminamos conformando nuestro equipo.
            Puede que nuestra historia sea bastante discrepante al “history telling” que normalmente vemos escrito en un sin fin de proyectos y webs. Nosotros no necesitamos mentir. Nuestro producto hablará por sí mismo con todas sus cualidades generadas por este equipo genuino y persistente.
          </p>
        </div>
      </div>
      <div className={styles.p1}>
        <div>
          <h1>Quienes somos?</h1>
          <p>En Track Travel, somos un equipo de apasionados desarrolladores web con experiencia en el diseño y desarrollo de sitios y aplicaciones web de alta calidad. Nos enorgullece ofrecer soluciones personalizadas para cada uno de nuestros clientes, centrándonos en la atención al detalle y la experiencia del usuario. Nuestro objetivo es proporcionar una experiencia de desarrollo web completa y personalizada para satisfacer las necesidades y objetivos de cada cliente. Nos esforzamos por utilizar las últimas tecnologías y técnicas para garantizar que cada proyecto se desarrolle de manera eficiente y eficaz. Nos enorgullece trabajar en estrecha colaboración con nuestros clientes para comprender sus objetivos y necesidades específicas. Creemos que la comunicación clara y constante es la clave para el éxito de cualquier proyecto y nos aseguramos de mantener a nuestros clientes informados en cada paso del proceso de desarrollo. Ya sea que necesites un sitio web simple o una aplicación web compleja, nuestro equipo está aquí para ayudarte. No dudes en ponerte en contacto con nosotros para hablar sobre tus necesidades de desarrollo web y cómo podemos ayudarte a alcanzar tus objetivos en línea. </p>
        </div>
        <Image alt="Imagen Muestra 2" className={styles.p2Image} src={aboutImg2} />
      </div>
      <Team />
    </div>
  );
}

export default About;
