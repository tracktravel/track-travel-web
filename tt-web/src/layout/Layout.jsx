import { useRouter } from "next/router";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/footer/Footer";
import WhatsApp from "@/components/whatsApp/WhatsApp";
import Scroll from "@/components/scroll/Scroll";

export default function Layout({ children }) {
  const isError = children.props.statusCode;

  return (
    <div>
      {!isError && <NavBar />}
      {!isError && <WhatsApp />}
      <main>{children}</main>
      <Scroll />
      {!isError && <Footer />}
    </div>
  );
}
