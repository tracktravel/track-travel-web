import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Stores.module.css";
import AppStore from "../../assets/AppStore.svg";
import PlayStore from "../../assets/PlayStore.svg";
import Swal from "sweetalert2";

export default function Stores() {
  const [isAvailable, setIsAvailable] = useState(false);

  const handleOnClick = () => {
    setIsAvailable(true);
  };

  const showUnavailableAlert = () => {
    Swal.fire({
      title: "Próximamente disponible en la tienda de aplicaciones",
      confirmButtonText: "OK",
      confirmButtonColor: "#dd302c",
    });
  };

  return (
    <div className={styles.stores}>
      <div
        className={styles.button}
        onClick={isAvailable ? null : showUnavailableAlert}
      >
        <div data-tooltip="Entra en contacto">
          <div className={`${styles.store} center `}>
            <Image src={AppStore} alt="Apple" />
          </div>
        </div>
      </div>
      <div
        className={styles.button}
        onClick={isAvailable ? null : showUnavailableAlert}
      >
        <div className={`${styles.store} center `}>
          <Image src={PlayStore} alt="Google" />
        </div>
      </div>
      {isAvailable ? (
        <div>{/* Mostrar enlace a la tienda de aplicaciones */}</div>
      ) : null}
    </div>
  );
}
