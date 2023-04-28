import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <meta charSet="UTF-8"/>

        <meta name="description" content="Track Travel es una herramienta de gestión integral para agencias de turismo que te permite gestionar tus ventas, tours, publicidad y contactos con clientes en una sola aplicación. Con Track Travel, podrás hacer seguimiento en tiempo real de tus transportes y mantener contacto con tus clientes vía chat. ¡Optimiza tu flujo de trabajo y toma decisiones más informadas con los dashboards informativos de Track Travel!"/>

        <meta name="keywords" content="Track Travel, ORM, agencias de turismo, gestión de ventas, tours, seguimiento en tiempo real, chat con clientes, dashboards informativos"/>

        <meta name="author" content="Track Travel Team"/>

        <meta name="robots" content="index, follow"/>

      </Head>
      <body id="switch" className="light">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
