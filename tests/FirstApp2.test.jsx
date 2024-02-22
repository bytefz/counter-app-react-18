import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Pruebas en FirstApp", () => {

  const title = 'Hola, soy Goku';
  const subtitle = 'Soy un subtítulo';

  test('debe hacer match con el snapshot', () => { 

    const {container } = render (<FirstApp title={title}/>);

    expect(container).toMatchSnapshot();

   });


  test('debe de mostrar el mensaje "Hola, soy Goku" ', () => {

    render(<FirstApp title={title}/>);

    //* El método screen es una instancia de la clase RenderResult
    //* Es una pedazo de la interfaz de render renderizado en ese momento.
    expect(screen.getByText(title)).toBeTruthy();


  });

  test('debe de mostrar el titulo en un h1 ', () => {

    render(<FirstApp title={title}/>);

    //* El metodo getByRole() busca un elemento por su rol, por un elemento html
    expect(screen.getByRole('heading', {level:1}).innerHTML).toContain(title);

  });

  test('debe de mostrar un subtitulo enviado por props ', () => {

    render(<FirstApp title={title} subtitle={subtitle}/>);

    //* Muestra la cantidad de elementos que coinciden con el texto
    expect(screen.getAllByText(subtitle).length).toBe(1);

  });



});
