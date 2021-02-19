import Head from 'next/head';

import TitleSection from '../components/titleSection';

const style = {
  fontSize: '3em',
  margin: '30px',
  textAlign: 'center',
  fontFamily: 'Raleway',
  fontWeigth: 'bold',
};

export default function Nosotros() {
  return (
    <div className="container">
      <Head>
        <title> Quienes Somos | Cuadros Marcel</title>
      </Head>
      <TitleSection>Quienes Somos?</TitleSection>
      <p style={style}>
        Mi nombre es Marcela Fariña y mi pasión por el dibujo y la pintura comienza desde muy
        pequeña, pasaba mucho tiempo del día dibujando, pintando como me imagino una gran cantidad
        de chicas y chicos a esa edad, era un momento único donde me permitía abstraerme de todo lo
        que pasaba a mi alrededor, fui creciendo y con ello comenzaron a aparecer las obligaciones
        diarias, estudiar, trabajar y sin darme cuenta dejé de realizar la actividad que más placer
        me causaba.
        <br />
        <br />
        <img style={{ borderRadius: 48 }} width="20%" src="./marcela.jpeg" align="right"></img>
        Con el tiempo las obligaciones fueron aumentando, en 1991 me case, forme la hermosa familia
        que siempre soñé, fui madre de dos maravillosos hijos y mientras ellos crecían compartía
        gran parte de mi tiempo con mi trabajo y los quehaceres de la casa como todas las mujeres.
        <br />
        Luego aparecieron situaciones familiares complejas que en ese momento fueron prioridad, a
        eso se le sumaron problemas importantes con mi salud, todas esas situaciones paulatinamente
        se fueron solucionando y comenzaron a reaparecer momentos de tranquilidad y armonía tanto en
        mí, como en mi familia, conjuntamente como si estuvieran relacionados de alguna manera los
        momentos de felicidad y el placer de dibujar y pintar después de muchos años nuevamente
        volví a reencontrarme con aquella niña que se pasaba todo el día dibujando, con ello comenzó
        los deseos de realizar cursos, asistir a talleres con el objetivo de conocer nuevas
        técnicas, utilizar distintos tipos de materiales, vivenciar nuevas experiencias que me
        permitieran ampliar el concepto del arte.
      </p>
      <p style={style}>
        Esto me provoco una gran motivación que me llevo a pintar casi a diario, todas esas pinturas
        se las dedicaba y las compartía con mi familia y amigos, un día, mis hijos que hoy ya no son
        chicos, sino hombres, comenzaron a incentivarme diciéndome que mis obras y mi talento lo
        expusiera y lo diera a conocer, a partir de su insistencia sumados a sus conocimientos en
        Marketing y tecnología e información decidimos crean un proyecto familiar, de esta manera
        creamos este espacio artístico que decidimos llamarlo Cuadros Marcel.
        <br />
        Ya les conté toda mi historia y como cada pintura es una historia en si misma, los invito a
        observar mis creaciones y que entre ellas ustedes puedan encontrar la obra adecuada para
        enriquecer su hogar
        <br />
        Gracias por visitar nuestra página y espero muy pronto nos podamos conocer.
      </p>
      <p style={style}>
        Los saludo muy cordialmente <br />
        Marcela A. Fariña
      </p>
    </div>
  );
}
