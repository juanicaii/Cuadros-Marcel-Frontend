import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import Head from 'next/head';
import Input from '../components/input';
import TitleSection from '../components/titleSection';
import styles from '../styles pages/LogIn.module.css';
import Button from '../components/button';
import * as schemas from '../utils/validation';

export default function Register() {
  const { register, errors, handleSubmit } = useForm({
    resolver: yupResolver(schemas.schemaRegisterValidation),
  });
  const onSubmit = (data: object) => {
    console.log(data);
  };

  const inputs = [
    { name: 'name', placeholder: 'Nombre', type: 'text' },
    { name: 'lastname', placeholder: 'Apellido', type: 'text' },
    { name: 'email', placeholder: 'Correo Electronico', type: 'email' },
    { name: 'password', placeholder: 'Contraseña', type: 'password' },
  ];

  return (
    <div>
      <Head>
        <title> Iniciar Sesion | Cuadros Marcel</title>
      </Head>
      <TitleSection>Crear Cuenta</TitleSection>
      <div className={styles.form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          {inputs.map((input) => (
            <div key={input.name} className={styles.input}>
              <Input
                error={errors[input.name]}
                register={register}
                type={input.type}
                name={input.name}
                placeholder={input.placeholder}
              />
            </div>
          ))}
          <div>
            <Button buttonHandler={null} type="submit">
              Iniciar Sesion
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
