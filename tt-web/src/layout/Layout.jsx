import React from "react";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import WhatsApp from "@/components/WhatsApp/WhatsApp";
import Scroll from "@/components/Scroll/Scroll";


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