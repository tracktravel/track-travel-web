import useForm from '../../hooks/useForm';
import styles from './Form.module.css';


const INITIAL_CONTACT = {
    name: "",
    email: "",
    message: "",
    phone: "",
};
  
  const REGEX_TEXT = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  const REGEX_EMAIL = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const validateForm = (formContact) => {
    const errors = {};

    // name
    if (!formContact.name.trim()) {
      errors.name = "Debes ingresar tu nombre";
    } else if (!REGEX_TEXT.test(formContact.name.trim())) {
      errors.name =
        "Tu nombre debe ser un texto sin numeros ni caracteres especiales";
    } else if (formContact.name.trim().length > 30) {
      errors.name = "Tu nombre debe contar con menos de 30 caracteres";
    }
  
    // email
    if (!formContact.email.trim()) {
      errors.email = "Debes ingresar tu correo";
    } else if (!REGEX_EMAIL.test(formContact.email.trim())) {
      errors.email = "Debes ingresar un correo valido";
    } else if (formContact.email.trim().length > 40) {
      errors.email = "Tu correo debe contar con menos de 40 caracteres";
    }
  
    // subject:
    if (!formContact.subject.trim()) {
      errors.subject = "Debes ingresar un asunto";
    } else if (formContact.subject.trim().length > 50) {
      errors.subject = "El asunto debe contar con menos de 50 caracteres";
    }
  
    // message
    if (!formContact.message.trim()) {
      errors.message = "Debes ingresar un mensaje";
    } else if (formContact.message.trim().length > 500) {
      errors.message = "El mensaje debe contar con menos de 500 caracteres";
    }
  
    return errors;
  };
  
export default function Form() {
  const {
    form,
    handleChange,
    handleBlur,
    handleSubmit,
    isLoading,
    success,
    errors,
  } = useForm(INITIAL_CONTACT, validateForm);
  
  return (
    <div className={styles.generalcontactUs}>
    <div className={styles.contactUs}>
        <div className={styles.containerDosContactUs}>
            <h1>Contáctame</h1>
            <div className={styles.contactFormContactUs}>
                <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
                    <input className={styles.input} type="text" name='name' value={ form.name } placeholder='Nombre' onChange={(e) => handleChange(e)} />
                    {errors.name && <p className="danger">{ errors.name }</p>}
                    <input className={styles.input} type="email" name='email' value={ form.email } placeholder='Email' onChange={(e) => handleChange(e)} />
                    {errors.email && <p className="danger">{ errors.email }</p>}
                    <input className={styles.input} type="text" name='phone' value={ form.phone } placeholder='Teléfono' onChange={(e) => handleChange(e)} />
                    {errors.phone && <p className="danger">{ errors.phone }</p>}
                    {errors.country && <p className="danger">{ errors.country }</p>}
                    <textarea className={styles.textarea} name="message" value={ form.message } placeholder='Comentarios' onChange={(e) => handleChange(e)} ></textarea>
                    {errors.message && <p className="danger">{ errors.message }</p>}
                    {
                        !errors.name && form.name.length > 0 &&
                        !errors.email && form.email.length > 0 &&
                        !errors.phone && form.phone.length > 0 &&
                        !errors.message && form.message.length > 0 ?
                        <button className={styles.siteBtn} type="submit">ENVIAR</button> : <button className={styles.siteBtnDesaprobated} type="submit" disabled>ENVIAR</button>
                    }
                </form>
              
            </div>
        </div>
    </div>
</div>
  )
}
