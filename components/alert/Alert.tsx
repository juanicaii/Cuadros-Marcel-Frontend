import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import styles from './Alert.module.css';

const MySwal = withReactContent(Swal);

const Alert = (title, icon) =>
  MySwal.fire({
    icon,
    title: <p className={styles.title}> Sistemas</p>,
    html: <p className={styles.text}>{title}</p>,
    width: 500,
    timer: 2000,
    timerProgressBar: true,
    showCancelButton: false,
    showConfirmButton: false,
  });

export default Alert;
