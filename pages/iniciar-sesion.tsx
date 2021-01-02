import { Title } from "@material-ui/icons";
import Input from "../components/input";
import TitleSection from "../components/titleSection";
import styles from "../styles pages/LogIn.module.css";
import Button from "../components/button";
export default function LogIn() {
  return (
    <div>
      <TitleSection>Inciar Sesion</TitleSection>
      <div className={styles.form}>
        <div className={styles.input}>
          <Input name="email" placeholder="Correo Electronico" />
        </div>
        <div className={styles.input}>
          <Input name="email" placeholder="Correo Electronico" />
        </div>
        <div>
          <Button type="submit" buttonHandler={alert}>
            Iniciar Sesion
          </Button>
        </div>
      </div>
    </div>
  );
}
