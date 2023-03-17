import React from "react";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/footer/Footer";
import WhatsApp from "@/components/whatsApp/WhatsApp";
import Scroll from "@/components/scroll/Scroll";


export default function Layout({children}) {
    return (
        <div>
            <NavBar />
            <WhatsApp />
            <main>{children}</main>
            <Scroll />
            <Footer/>
        </div>
    );
};