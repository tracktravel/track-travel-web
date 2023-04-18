import "@/styles/globals.css";
import Layout from "@/layout/Layout";
import Loader from "@/components/loader/Loader";
import { applyInitialDataTheme } from "../helpers/initialTheme"
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  let [load, setLoad] = useState(null)

  useEffect(() => {
    applyInitialDataTheme()
    const loadedTheme = localStorage.getItem("theme");
    if (load !== loadedTheme) {
      setLoad(loadedTheme);
    }
  },[])

  if(!load) {
    return(
      <Loader></Loader>
    )
  }else 
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}