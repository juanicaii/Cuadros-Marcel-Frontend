import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import { useDispatch,useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import Head from 'next/head';
import Input from '../components/input';
import TitleSection from '../components/titleSection';
import styles from '../styles pages/LogIn.module.css';
import Button from '../components/button';
import * as schemas from '../utils/validation';
import Alert from '../components/alert';
import { HOME_ROUTE } from '../utils/constants';

import authAction from '../redux/actions/authActions';

export default function LogIn() {
  const { register, errors, handleSubmit } = useForm({
    resolver: yupResolver(schemas.schemaLoginValidation),
  });
  const user = useSelector((state) => state.user);
  const router = useRouter();
  const dispatch = useDispatch();
  const onSubmit = async (data: object) => {
    try {
      const response = await dispatch(authAction.loginUser(data));

      if (response.status === 200) {
        document.cookie = `access_token=${response.data.access_token}`;
        Alert(`Bienvenido de nuevo, ${response.data.first_name}`, 'success');
        setTimeout(() => {
          router.push(HOME_ROUTE);
        }, 2000);
      }
    } catch (err) {
      const firstkey = Object.keys(err.response.data)[0];
      Alert(err.response.data[firstkey][0], 'error');
    }
  };
  const inputs = [
    { name: 'username', placeholder: 'Correo Electronico', type: 'email' },
    { name: 'password', placeholder: 'Contraseña', type: 'password' },
  ];


  if (user.isLoggedIn){
    router.push(HOME_ROUTE);
  }


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
