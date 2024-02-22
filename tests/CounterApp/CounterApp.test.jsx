import { render, screen, fireEvent } from "@testing-library/react"
import {CounterApp} from "../../src/components/main/CounterApp"

describe('Pruebas al componente <CounterApp/>', () => { 

    const number = 100;

    test('debe hacer el match con el snapshot', () => { 

        const { container } = render(<CounterApp number={number}/>);

        expect(container).toMatchSnapshot();

    });

    test('debe de mostrar el valor inicial de 100 <CounterApp value={100}>', () => { 

        render(<CounterApp number={number} />);

        expect(screen.getByText(number)).toBeTruthy();

        expect(screen.getByRole('heading', {level:1}).innerHTML).toContain("100");

    });

    test('debe de incrementar con el botón +1', () => {

        render(<CounterApp number={number} />);

        //* Crea un evento de click en el botón
        fireEvent.click(screen.getByText('+1'));
        //* Verifica si el valor del span es igual al valor inicial + 1
        expect(screen.getByText(number + 1)).toBeTruthy();
    });

    test('debe de decrementar con el botón -1', () => {


        render(<CounterApp number={number} />);

        //* Crea un evento de click en el botón
        fireEvent.click(screen.getByText('-1'));
        //* Verifica si el valor del span es igual al valor inicial - 1
        expect(screen.getByText(number - 1)).toBeTruthy();

    });

    test('debe de decrementar con el botón reset', () => {


        render(<CounterApp number={number} />);

        //* Crea un evento de click en el botón
        fireEvent.click(screen.getByText('-1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('-1'));
        // fireEvent.click(screen.getByText('Reset'));

        //* Esta manera de poder obtener un elemento por su aria-label
        //* Es más recomendable que por su nombre
        fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}));
        

        //* Verifica si el valor del span es igual al valor reseteado al valor inicial
        expect(screen.getByText(number)).toBeTruthy();

    });



 })
