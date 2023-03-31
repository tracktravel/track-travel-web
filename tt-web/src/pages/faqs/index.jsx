import React from 'react'
import styles from "./faqs.module.css";
import Image from 'next/image';
import faqs1 from '../../assets/faqs1.png'
import faqs2 from '../../assets/faqs2.png'

const index = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerfaqs}>
        <h1>¡Bienvenidos a Track Travel!</h1>
        <Image alt="Faqs" className={styles.faqs} src={faqs1} />
      </div>

      <h2>Aquí presentamos algunas preguntas frecuentes que pueden ayudar a comprender mejor nuestra plataforma y cómo funciona:</h2><br />

      <h2>¿Qué es Track Travel?</h2>
      <p>Track Travel es una aplicación móvil que conecta a los turistas con agencias de turismo y proveedores de servicios de viaje de todo el mundo. Ofrecemos una solución integral para la planificación, organización y gestión de viajes.</p><br /><br />

      <h2>¿Cómo funciona la aplicación?</h2>
      <p>Los usuarios pueden descargar la aplicación de forma gratuita desde la App Store o Google Play. Una vez descargada, pueden buscar y reservar viajes, tours, actividades, alojamiento y transporte. También pueden recibir recomendaciones personalizadas basadas en sus intereses y preferencias.</p><br /><br />

      <h2>¿Cómo puedo reservar un viaje en Track Travel?</h2>
      <p>Para reservar un viaje en Track Travel, primero debe crear una cuenta en la aplicación. Luego, puede buscar viajes y tours en función de su destino y fechas de viaje. Una vez que haya encontrado un viaje que le guste, puede hacer una reserva y pagar en línea.</p><br /><br />

      <h2>¿Puedo cancelar o cambiar mi reserva?</h2>
      <p>Sí, puede cancelar o cambiar su reserva en la aplicación en cualquier momento antes de la fecha de inicio del viaje. Las políticas de cancelación y cambio varían según el proveedor de servicios de viaje, por lo que es importante leer los términos y condiciones antes de hacer una reserva.</p><br /><br />

      <h2>¿Qué medidas de seguridad se han tomado para proteger mis datos personales y financieros?</h2>
      <p>En Track Travel, nos tomamos muy en serio la seguridad de nuestros usuarios. Utilizamos tecnología de encriptación avanzada para proteger los datos personales y financieros de nuestros usuarios. Además, nunca compartimos información personal con terceros sin el consentimiento del usuario.</p><br /><br />

      <h2>¿Cómo puedo obtener ayuda si tengo un problema con mi reserva?</h2>
      <p>Si tiene algún problema con su reserva, puede contactarnos a través del chat en línea en la aplicación o enviar un correo electrónico a nuestro equipo de soporte al cliente. Haremos todo lo posible para ayudarlo a resolver su problema lo antes posible.</p><br /><br />

      <h2>¿Qué otros servicios ofrece Track Travel además de la reserva de viajes?</h2>
      <p>Además de la reserva de viajes, Track Travel también ofrece una variedad de herramientas y funcionalidades para ayudar a los usuarios a planificar y gestionar su viaje. Estos incluyen mapas interactivos, recomendaciones personalizadas, consejos de viaje y una función de seguimiento de gastos.</p><br /><br />

      <h2>¿Cómo puedo estar seguro de que estoy obteniendo el mejor precio para mi viaje?</h2>
      <p>En Track Travel, trabajamos con proveedores de servicios de viaje de todo el mundo para ofrecer a nuestros usuarios la mejor selección de viajes y tours. También ofrecemos precios competitivos y garantizamos que nuestros usuarios siempre obtengan el mejor precio disponible para sus reservas.</p><br /><br />

      <h2>¿Cómo puedo dejar comentarios y valoraciones sobre mi experiencia de viaje?</h2>
      <p>Después de su viaje, recibirá una invitación para dejar comentarios y valoraciones sobre su experiencia en la aplicación. Estos comentarios y valoraciones ayudarán a otros usuarios a tomar decisiones informadas al reservar viajes y tours en el futuro.</p><br /><br />

      <h2>¡Gracias por elegir Track Travel! Esperamos que esta información le haya sido útil. Si tiene más preguntas o necesita ayuda adicional, no dude en contactarnos.</h2><br /><br />
    </div>
  )
}

export default index
