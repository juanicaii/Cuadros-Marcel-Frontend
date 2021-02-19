import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import Head from 'next/head';
import Input from '../components/input';
import TitleSection from '../components/titleSection';
import styles from '../styles pages/LogIn.module.css';
import Button from '../components/button';
import * as schemas from '../utils/validation';

export default function LogIn() {
  const { register, errors, handleSubmit } = useForm({
    resolver: yupResolver(schemas.schemaLoginValidation),
  });

  const onSubmit = (data: object) => {
    console.log(data);
  };

  const inputs = [
    { name: 'email', placeholder: 'Correo Electronico', type: 'email' },
    { name: 'password', placeholder: 'Contraseña', type: 'password' },
  ];

  return (
    <div>
      <Head>
        <title> Iniciar Sesion | Cuadros Marcel</title>
      </Head>
      <TitleSection>Inciar Sesion</TitleSection>
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
