import styles from "./NavBar.module.css"
import Link from "next/link"
import Image from "next/image"
import logoTravel from "../../assets/logo.png"
export default function NavBar({ children }) {
  return (
    <div className={styles.nav}>
       
          <Link className={styles.nav__logoContainer} href={'/'}>
            <Image className={styles.nav__logo} width={80} height={80} src={logoTravel} alt="logo"/>
            <h1>Track Travel</h1>
          </Link>
      
        <div className={styles.nav__links}>
          <Link href={'/'}>Home</Link>
          <Link href={'#solutions'}>Solutions</Link>
          <Link href={'/about'}>About</Link>
          <Link href={'/contact'}>Contact</Link>
        </div>
       
    </div>
  )
}

