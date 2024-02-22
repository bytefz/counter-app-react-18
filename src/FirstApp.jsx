import PropTypes from "prop-types";

const greetting = (name) => {
  return `Hola ${name}`;
};

//* Dentro de jsx no puede ir variables tipo object(objectos, promesas, ...).
//! En caso se desee usar un objeto se debe convertir a string con el metodo JSON.stringify(objeto)

export const FirstApp = ({ title, subtitle }) => {
  return (
    <>
      <h1 data-testid="test-title">{title}</h1>
      <p>{subtitle}</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

//* Se puede defininar valores por defecto para las propiedades de un componente
//* No tienen que existir en el objeto de propiedades
FirstApp.defaultProps = {
  // title: 'No hay título',
  subtitle: "No hay subtitulo",
  name: "Sin nombre",
};
