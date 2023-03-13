import React from 'react'
import styles from "./Footer.module.css"
import SocialNetworh from "@/components/SocialNetworh/SocialNetworh";


export default function Footer() {
  return (
    <>
    <div className={styles.footer}>
    <SocialNetworh />
    </div>
    </>
  )
}
