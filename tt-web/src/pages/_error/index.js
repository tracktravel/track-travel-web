import styles from "./error.module.css";
import image404 from "../../assets/404Image.png";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Error({ statusCode, image, message }) {
  const router = useRouter();
  const path = router.asPath;
  return (
    <div className={styles.error}>
      <Image
        className={styles.error__image404}
        src={image}
        alt={statusCode}
        placeholder="empty"
      />
      <div className={styles.error__container_h2_button}>
        <h2 className={styles.error__h2}>
          <span>{`${statusCode}:`}</span>
          {` "${path}" ${message}`}
        </h2>
        <button
          className={styles.error__button}
          onClick={() => router.push(window.location.origin)}
        >
          Go to Home
        </button>
      </div>
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  let statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  let image;
  let message;
  if (statusCode === 404) {
    image = image404;
    message = "not found";
  }
  if (statusCode === 500) {
    image;
    message = "client Error";
  }
  return {
    statusCode,
    image,
    message,
  };
};
