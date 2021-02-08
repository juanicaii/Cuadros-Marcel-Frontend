import Input from "../input";
import TitleSection from "../titleSection";
import styles from "../../styles pages/Contact.module.css";
import Button from "../button";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as schemas from "../../utils/validation";

export default function Contact() {
  const { register, watch, errors, handleSubmit } = useForm({
    resolver: yupResolver(schemas.schemaContactValidation),
  });

  const onSubmit = (data: object) => {
    console.log(data);
  };

  const inputs = [
    { name: "name", placeholder: "Nombre", type: "text" },
    { name: "email", placeholder: "Correo Electronico", type: "email" },
  ];

  return (
    <div>
      <TitleSection>Contacto</TitleSection>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.form}>
          {inputs.map((input) => (
            <div key={input.name} className={styles.input}>
              <Input
                register={register}
                error={errors[input.name]}
                type={input.type}
                name={input.name}
                placeholder={input.placeholder}
              />
            </div>
          ))}
          <div className={errors["message"] ? styles.inputError : styles.input}>
            <textarea
              ref={register}
              placeholder={"Mensaje"}
              name="message"
              id="message"
            ></textarea>
          </div>
          <div className={styles.error}>
            <span>{errors["message"]?.message}</span>
          </div>

          <div className={styles.input}>
            <Button type="submit" buttonHandler={null}>
              Iniciar Sesion
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
