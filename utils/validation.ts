import * as yup from "yup";

export const schemaRegisterValidation = yup.object().shape({
  name: yup.string().required("No puedes dejar el nombre en blanco"),
  lastname: yup.string().required("No puedes dejar el apellido en blanco"),
  email: yup
    .string()
    .email("Ingresa un correo electronico valido")
    .required("No puedes dejar el correo electronico en blanco"),
  password: yup
    .string()
    .min(6, "Ingresa una contraseña de almenos 6 caracteres"),
});

export const schemaLoginValidation = yup.object().shape({
  email: yup
    .string()
    .email("Ingresa un correo electronico valido")
    .required("No puedes dejar el correo electronico en blanco"),
  password: yup
    .string()
    .min(6, "Ingresa una contraseña de almenos 6 caracteres"),
});

export const schemaContactValidation = yup.object().shape({
  name: yup.string().required("No puedes dejar el campo nombre en blanco"),
  email: yup
    .string()
    .email("Ingresa un correo electronico valido")
    .required("No puedes dejar el correo electronico en blanco"),
  message: yup
    .string()
    .required("El mensaje no puede estar vacio")
    .test(
      "len",
      "El mensaje debe contener almenos 20 caracteres",
      (val) => val.length >= 20
    ),
});
