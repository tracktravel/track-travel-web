
import React from 'react';
import styles from "./legales.module.css";
import Link from 'next/link';


const Legales = () => {
    return (
        <div className={styles.container}>
        <div className={styles.about}>
            <h1 className={styles.title}>Terminos y Condiciones</h1>
            <p>INTRODUCCIÓN
        La presente aplicación móvil ("TRACK TRAVEL") ha sido desarrollada por [nombre de la empresa] con el propósito de ofrecer servicios de seguimiento de viajes de negocios y turismo. El acceso y uso de la Aplicación está sujeto a los términos y condiciones que se describen a continuación. Al usar la Aplicación, aceptas estar sujeto a estos términos y condiciones, así como a nuestra Política de Privacidad.
        
        USO DE LA APLICACIÓN
        2.1 Registro: Para poder utilizar la Aplicación, es necesario registrarse y crear una cuenta de usuario. Al registrarte, aceptas proporcionar información precisa y completa sobre ti mismo y actualizarla si es necesario. Nos reservamos el derecho de desactivar cualquier cuenta de usuario que se considere fraudulenta o sospechosa de actividad ilícita. 
        <br/>
        2.2 Uso de la Aplicación: La Aplicación es solo para uso personal y no comercial. No se permite el uso de la Aplicación para ninguna actividad ilegal o fraudulenta. Al utilizar la Aplicación, aceptas cumplir con todas las leyes y regulaciones aplicables.
        <br/>
        2.3 Contenido generado por el usuario: La Aplicación puede permitirte publicar o compartir contenido generado por el usuario. Al hacerlo, garantizas que dicho contenido no infringe los derechos de propiedad intelectual de terceros, es legal y no es ofensivo ni difamatorio. Nos reservamos el derecho de eliminar cualquier contenido que consideremos inapropiado o violatorio de estos términos y condiciones.
        <br/><br/>
        PROPIEDAD INTELECTUAL<br/>
        La Aplicación, incluyendo su diseño, código fuente, textos, gráficos, imágenes, fotografías, software, marcas comerciales, nombres comerciales y otros elementos, son propiedad exclusiva de [nombre de la empresa] o de sus respectivos titulares. Queda prohibida la reproducción, distribución, modificación o cualquier otro uso no autorizado de la Aplicación o de cualquiera de sus elementos.
        <br/><br/>
        LIMITACIÓN DE RESPONSABILIDAD<br/>
        4.1 Contenido de terceros: La Aplicación puede contener enlaces a sitios web o contenido de terceros. No somos responsables de la exactitud, integridad o legalidad de dicho contenido.
        <br/>
        4.2 Interrupciones del servicio: Nos esforzamos por mantener la Aplicación disponible en todo momento, pero no podemos garantizar que la Aplicación esté libre de interrupciones o errores técnicos. No seremos responsables de ningún daño o pérdida que se derive del uso o la imposibilidad de usar la Aplicación.
        <br/>
        4.3 Responsabilidad del usuario: Eres responsable del uso que hagas de la Aplicación y de cualquier contenido que publiques o compartas a través de la misma. No seremos responsables de ninguna pérdida o daño que se derive del uso que hagas de la Aplicación.
        <br/><br/>
        MODIFICACIONES A LOS TÉRMINOS Y CONDICIONES<br/>
        Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento y sin previo aviso. Si realizamos alguna modificación, la publicaremos en la Aplicación y la fecha de entrada en vigor será la indicada en dicha publicación. Es tu responsabilidad revisar periódicamente estos términos y condiciones para conocer cualquier cambio que se haya realizado. El uso continuado de la Aplicación después de cualquier modificación implica la aceptación de los términos y condiciones actualizados.
        
        RESCISIÓN
        Podemos rescindir tu acceso a la Aplicación en cualquier momento y sin previo aviso si incumples estos términos y condiciones o si consideramos que tu uso de la Aplicación es fraudulento o perjudicial para nosotros o para otros usuarios. Además, tienes derecho a rescindir tu cuenta de usuario en cualquier momento.
        
        LEGISLACIÓN APLICABLE
        Estos términos y condiciones se regirán e interpretarán de acuerdo con las leyes de [país] y cualquier disputa que surja en relación con ellos se someterá a la jurisdicción exclusiva de los tribunales de [ciudad].
        
        Si tienes alguna pregunta sobre estos términos y condiciones, por favor contáctanos en [correo electrónico de contacto].
        
        Fecha de entrada en vigor: [fecha de entrada en vigor]
        
        
        ACUERDO COMPLETO
        Estos términos y condiciones y nuestra Política de Privacidad constituyen el acuerdo completo entre tú y nosotros en relación con el uso de la Aplicación y reemplazan todos los acuerdos previos o contemporáneos, verbales o escritos.
        
        DIVISIBILIDAD
        Si alguna disposición de estos términos y condiciones se considera inválida o no aplicable por cualquier motivo, las demás disposiciones seguirán siendo válidas y aplicables en la medida en que lo permita la ley.
        
        ENCABEZADOS
        Los encabezados de las secciones de estos términos y condiciones son solo para fines de referencia y no limitan ni afectan la interpretación de los términos y condiciones.<br/>
        
        Gracias por utilizar nuestra Aplicación de seguimiento de viajes de negocios y turismo.</p>
            <Link href="/terminos.html">
            {/*<a target="_blank">Términos y Condiciones</a>*/}
            </Link>
        </div>
        </div>
    );
    }

export default Legales;
