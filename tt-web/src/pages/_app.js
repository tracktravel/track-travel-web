import "@/styles/globals.css";
import Layout from "@/layout/Layout";
import { applyInitialDataTheme } from "../helpers/initialTheme"
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    applyInitialDataTheme()
  })
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}