import React, { useState } from "react";
import { BsFillTelephoneFill, BsWhatsapp } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import styles from "./Contact.module.css";
import emailjs from "@emailjs/browser";

function validate(input) {
  let errors = {};
  if (!input.name) {
    errors.name = "Tu nombre es requerido.";
  } else if (/[.!@#$%^&*()_+-=]/.test(input.name)) {
    errors.name = "Tu nombre no puede tener números o caracteres especiales.";
  }
  if (!input.email) {
    errors.email = "Tu email es requerido.";
  } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(input.email)) {
    errors.email = "Tu email no es válido.";
  }
  if (!input.message) {
    errors.message = "Tu Mensaje es requerido.";
  }
  return errors;
}

export default function Contact() {
  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false); //Aviso de color informando que el formulario fue enviado
  const [chars, setChars] = useState(0);

  const [input, setInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
    if (e.target.nodeName === "TEXTAREA") {
      setChars(e.target.value.length);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_7ey5d8n",
        "template_6n80qlr",
        e.target,
        "bXuut_Ev3bYLdSLcm"
      )
      .then(() => {
        setInput({
          name: "",
          email: "",
          message: "",
        });
        setFormSubmitted(true);
        setChars(0);
        setTimeout(() => {
          setFormSubmitted(false);
        }, 10000); // Set timeout for 10 seconds
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className={`${styles.contact} `}>
      <div className={`${styles.container} center `}>
        <div className={`${styles.one} `}>
          <h2 className={`${styles.title} `}>CONTACTO</h2>
          <h3 className={`${styles.subtitle} `}>Queremos escucharte</h3>

          <div className={` `}>
            {/* <div className={`${styles.section} `}>
                            <BsFillTelephoneFill className={`${styles.icon} `} />
                            <p>123456789</p>
                        </div> */}
            <div className={`${styles.section} `}>
              <BsWhatsapp className={`${styles.icon} `} />
              <p>+55 21994046975</p>
            </div>
            <div className={`${styles.section} `}>
              <MdEmail className={`${styles.icon} `} />
              <p>info.tracktravel@gmail.com</p>
            </div>
            <div className={`${styles.section} `}>
              <FaMapMarkerAlt className={`${styles.icon} `} />
              <p>Rio de Janeiro, Brasil</p>
            </div>
          </div>
        </div>

        <div className={`${styles.two} centerColumn `}>
          <form
            className={`${styles.form} centerColumnP`}
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className={` centerColumnP `}>
              <input
                className={styles.input}
                type="text"
                name="name"
                value={input.name}
                placeholder="Nombre completo"
                onChange={(e) => handleChange(e)}
              />
              {errors.name && (
                <p className={`${styles.danger}`}>{errors.name}</p>
              )}
            </div>

            <div className={` centerColumnP`}>
              <input
                className={styles.input}
                type="email"
                name="email"
                value={input.email}
                placeholder="Email"
                onChange={(e) => handleChange(e)}
              />
              {errors.email && (
                <p className={`${styles.danger}`}>{errors.email}</p>
              )}
            </div>

            <div className={styles.textareaContainer}>
              <textarea
                className={styles.textarea}
                name="message"
                value={input.message}
                placeholder="Comentarios"
                maxLength="500"
                onChange={(e) => handleChange(e)}
              ></textarea>
              {errors.message && (
                <p className={`${styles.dangerTextarea}`}>{errors.message}</p>
              )}
              <p className={styles.charsLeft}>{chars}/500</p>
            </div>

            {!errors.name &&
            input.name.length > 0 &&
            !errors.email &&
            input.email.length > 0 &&
            !errors.message &&
            input.message.length > 0 ? (
              <button className={styles.btnSend} type="submit">
                ENVIAR
              </button>
            ) : (
              <button className={styles.btnDisabled} type="submit" disabled>
                ENVIAR
              </button>
            )}
          </form>
          <div className={styles.messageSend}>
            {formSubmitted && <p>Formulario enviado</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
