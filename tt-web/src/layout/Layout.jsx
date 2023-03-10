import React from "react";
import NavBar from "@/components/NavBar/NavBar";
// import Footer from "@/components/Footer/Footer";
import WhatsApp from "@/components/WhatsApp/WhatsApp";
import Scroll from "@/components/Scroll/BackTotopButton";
import SocialNetworh from "@/components/SocialNetworh/SocialNetworh";
import Contact from "@/components/Contact/Contact";[]


export default function Layout({children}) {
  return (
    <>
      <div>
        <NavBar />
        <main>{children}</main>
        
        <SocialNetworh />
        <WhatsApp />
        <Scroll />
        {/* <Contact />[] */}
        {/* <Footer /> */}
      </div>
    </>
  );
}
