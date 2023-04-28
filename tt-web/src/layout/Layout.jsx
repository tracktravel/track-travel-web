import { useRouter } from "next/router";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/footer/Footer";
import WhatsApp from "@/components/whatsApp/WhatsApp";
import Scroll from "@/components/scroll/Scroll";
import { useIsMobile } from "@/hooks/useIsMobile";
import Chat from "@/components/chat/Chat";

export default function Layout({ children }) {
  const isError = children.props.statusCode;
  const  { url }  = useIsMobile()

  return (
    <div>
      {!isError && <NavBar />}
      {!isError && <Chat></Chat>}
      {!isError && <WhatsApp url={url}/>}
      <main>{children}</main>
      <Scroll />
      {!isError && <Footer url={url}/>}
    </div>
  );
}
