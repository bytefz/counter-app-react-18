import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Pruebas en FirstApp", () => {
  test("Debe hacer un match con el snapshot", () => {
    const { container } = render(<FirstApp title="Hola" />);

    //* Se puede usar el metodo toMatchSnapshot() para hacer una comparacion con el snapshot
    //? Spapshot: es una captura de la interfaz de la aplicacion en un momento determinado
    expect(container).toMatchSnapshot();
  });

  test("Debe mostrar el titulo en un h1", () => {
    const title = "Hola";
    const { container, getByText, getByTestId } = render(
      <FirstApp title={title} />
    );
    expect(getByText(title)).toBeTruthy();

    //! No es recomendable usar el metodo querySelector() para hacer pruebas
    const h1 = container.querySelector("h1");
    expect(h1.innerHTML).toContain(title);

    //? Se puede usar el metodo getByTestId() para hacer pruebas

    expect(getByTestId("test-title").innerHTML).toContain(title);
  });

  test("debe de mostrar el subtitulo enviado por props", () => {
    const title = "Hola";
    const subtitle = "Soy un subtitulo";

    const { getByText, getAllByText } = render(
      <FirstApp title={title} subtitle={subtitle} />
    );

    //* Espera que el texto exista
    expect(getByText(subtitle)).toBeTruthy();

    //* Espera que el texto se repita una cantidad de veces
    //? Retorna un array con todos los elementos que coincidan con el texto
    expect(getAllByText(subtitle).length).toBe(1); 
  });
});
