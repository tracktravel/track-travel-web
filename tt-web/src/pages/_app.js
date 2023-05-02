import "@/styles/globals.css";
import Layout from "@/layout/Layout";
import Loader from "@/components/loader/Loader";
import { applyInitialDataTheme } from "../helpers/initialTheme";
import { useEffect, useState } from "react";
// importaciones para i18n
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

// importacion de los archivos json de los idiomas
import global_es from "../translate/es.json";
import global_en from "../translate/en.json";
import global_pt from "../translate/pt.json";
import { useRouter } from "next/router";

const path = require("path");

i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    es: {
      global: global_es,
    },

    en: {
      global: global_en,
    },

    pt: {
      global: global_pt,
    },
  },
});

export default function App({ Component, pageProps }) {
  let [load, setLoad] = useState(null);

  const router = useRouter();

  useEffect(() => {
    applyInitialDataTheme();
    const loadedTheme = localStorage.getItem("theme");
    if (load !== loadedTheme) {
      setLoad(loadedTheme);
    }
  }, []);

  if (!load) {
    return <Loader></Loader>;
  } else
    return (
      <I18nextProvider i18n={i18next}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </I18nextProvider>
    );
}
