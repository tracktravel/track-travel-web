import React from 'react';
import styles from "./index.module.css"
import aboutImg from '../../assets/About.jpg'
import Image from 'next/image';
import Team from '@/components/team/Team';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.about}>
        <h1 className={styles.title}>About</h1>
      </div>
      <div className={styles.p1}>
        <Image className={styles.p1Image} src={aboutImg}></Image>
        <div>
          <h1>Nuestra historia</h1>
          <p>Nuestra historia comenzó hace varios años, cuando un grupo de entusiastas del turismo y los negocios se unieron con la visión de crear una agencia de seguimiento de viajes que ofreciera a los viajeros y empresarios una forma más sencilla y efectiva de organizar sus viajes.
            Desde entonces, hemos trabajado incansablemente para proporcionar una amplia gama de servicios de seguimiento de viajes para nuestros clientes, tanto para viajes de negocios como para viajes de turismo. Nos hemos enfocado en ofrecer una solución integral que les permita a los viajeros tener todo lo que necesitan en un solo lugar.
            Con el tiempo, hemos ampliado nuestro alcance y hemos desarrollado una red global de socios y proveedores, lo que nos permite ofrecer un servicio de seguimiento de viajes de clase mundial. Nos enorgullecemos de tener un equipo altamente capacitado y experimentado que está dedicado a brindar una experiencia de seguimiento de viajes sin igual a nuestros clientes.
            A medida que avanzamos en el futuro, seguimos comprometidos con nuestro objetivo de brindar soluciones de seguimiento de viajes innovadoras y de alta calidad a nuestros clientes en todo el mundo. Nos apasiona lo que hacemos y esperamos seguir siendo un líder en el mercado de seguimiento de viajes en el futuro.</p>
        </div>
      </div>
      <div className={styles.p1}>
        <div>
          <h1>Quienes somos?</h1>
          <p>En Track Travel, somos un equipo de apasionados desarrolladores web con experiencia en el diseño y desarrollo de sitios y aplicaciones web de alta calidad. Nos enorgullece ofrecer soluciones personalizadas para cada uno de nuestros clientes, centrándonos en la atención al detalle y la experiencia del usuario. Nuestro objetivo es proporcionar una experiencia de desarrollo web completa y personalizada para satisfacer las necesidades y objetivos de cada cliente. Nos esforzamos por utilizar las últimas tecnologías y técnicas para garantizar que cada proyecto se desarrolle de manera eficiente y eficaz. Nos enorgullece trabajar en estrecha colaboración con nuestros clientes para comprender sus objetivos y necesidades específicas. Creemos que la comunicación clara y constante es la clave para el éxito de cualquier proyecto y nos aseguramos de mantener a nuestros clientes informados en cada paso del proceso de desarrollo. Ya sea que necesites un sitio web simple o una aplicación web compleja, nuestro equipo está aquí para ayudarte. No dudes en ponerte en contacto con nosotros para hablar sobre tus necesidades de desarrollo web y cómo podemos ayudarte a alcanzar tus objetivos en línea. </p>
        </div>
        <Image className={styles.p2Image} src={aboutImg}></Image>
      </div>
      <Team />
    </div>
  );
}

export default About;
