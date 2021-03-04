import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch,useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import Head from 'next/head';
import Input from '../components/input';
import TitleSection from '../components/titleSection';
import styles from '../styles pages/LogIn.module.css';
import Button from '../components/button';
import * as schemas from '../utils/validation';
import authAction from '../redux/actions/authActions';
import Alert from '../components/alert';
import { HOME_ROUTE } from "../utils/constants";


export default function Register() {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schemas.schemaRegisterValidation),
  });
  const user = useSelector((state) => state.user);
  const router = useRouter();
  const dispatch = useDispatch();
  const onSubmit = async (data: object) => {
    try {
      const response = await dispatch(authAction.createNewUser(data));

      if (response.status === 201) {
        Alert('Cuenta creada correctamente', 'success');
        setTimeout(() => {
          router.push(HOME_ROUTE);
        }, 2000);
      }
    } catch (err) {
      const firstkey = Object.keys(err.response.data)[0];
      Alert(err.response.data.[firstkey][0], 'error');

    }
  };

  const inputs = [
    { name: 'first_name', placeholder: 'Nombre', type: 'text' },
    { name: 'last_name', placeholder: 'Apellido', type: 'text' },
    { name: 'email', placeholder: 'Correo Electronico', type: 'email' },
    { name: 'password', placeholder: 'Contraseña', type: 'password' },
    { name: 're_password', placeholder: 'Repetir Contraseña', type: 'password' },
  ];

  if (user.isLoggedIn){
    router.push(HOME_ROUTE);
  }
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
            <Button type="submit">Crear Cuenta</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
