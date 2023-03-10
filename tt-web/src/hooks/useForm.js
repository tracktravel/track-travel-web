import { useEffect, useState } from "react";
import { useRouter } from "next/router";


function useForm(initialForm, validateForm) {
    const router = useRouter();
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
  
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setForm({
        ...form,
        [name]: value,
      });
    };
  
    const handleBlur = () => {
      setErrors(validateForm(form));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const formErrors = validateForm(form);
      setErrors(formErrors);
      if (Object.keys(formErrors).length === 0) {
        setIsLoading(true);
        // Const URL = 
        try {
            const res = await emailjs.sendForm(
              "service_5ighawm",
              "template_m3r2xpl",
              e.target,
              "Wh7NDcRMB14lr1_Ox"
            );
          } catch (error) {
            console.log(error);
          }finally{
            setIsLoading(false);
          }
      }
    };
  
    return {
      form,
      handleChange,
      handleBlur,
      handleSubmit,
      isLoading,
      errors,
    };
  }
  
  export default useForm;