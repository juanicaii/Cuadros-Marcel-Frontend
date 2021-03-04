import axios from 'axios';
import * as yup from 'yup';
import * as utils from './constants';

export const schemaRegisterValidation = yup.object().shape({
  first_name: yup.string().required('No puedes dejar el nombre en blanco'),
  last_name: yup.string().required('No puedes dejar el apellido en blanco'),
  email: yup
    .string()
    .required('No puedes dejar el correo electronico en blanco')
    .email('Ingresa un correo electronico valido')
    .test('email', 'EL email ya esta en uso', async (value) => {
      if (value) {
        try {
          const response = await axios.post(
            process.env.NEXT_PUBLIC_URL_PATH + utils.VALIDATION_EMAIL,
            {
              email: value,
            }
          );
          return response.status === 200;
        } catch {
          return false;
        }
      }
      return false;
    }),

  password: yup
    .string()
    .required('No puedes dejar la contraseña en blanco')
    .min(8, 'Ingresa una contraseña de almenos 8 caracteres')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, 'La contraseña debe contener almenos ' + "\n" +
      'un numero,una letra minuscula y una mayuscula'),
  re_password: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Las contraseñas no coinciden ')
    .required('No puedes dejar el repetir contraseñas en blanco'),
});

export const schemaLoginValidation = yup.object().shape({
  username: yup
    .string()
    .email('Ingresa un correo electronico valido')
    .required('No puedes dejar el correo electronico en blanco'),
  password: yup.string().min(6, 'Ingresa una contraseña de almenos 6 caracteres'),
});

export const schemaContactValidation = yup.object().shape({
  name: yup.string().required('No puedes dejar el campo nombre en blanco'),
  email: yup
    .string()
    .email('Ingresa un correo electronico valido')
    .required('No puedes dejar el correo electronico en blanco'),
  message: yup
    .string()
    .required('El mensaje no puede estar vacio')
    .test('len', 'El mensaje debe contener almenos 20 caracteres', (val) => val.length >= 20),
});
