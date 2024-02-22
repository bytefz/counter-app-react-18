import { useState } from 'react';
import PropTypes from 'prop-types';

// import './counter.css';



export const CounterApp = ({number}) => {

    const [counter, setCounter] = useState(number);

    const handleAdd = () => {
        setCounter(counter + 1);
    }

    const handleSubstract = () => setCounter(counter - 1);


    const handleReset = () => setCounter(number);

    return (
        <>
            <h1 className="counter-card">
                Contador: <span className='number'>{counter}</span>
            </h1>

            <div className='buttons'>
                <button onClick={handleAdd}>+1</button>
                <button onClick={handleSubstract}>-1</button>
                <button aria-label="btn-reset" onClick={handleReset}>Reset</button>
            </div>
        </>
    )
}

CounterApp.propType = {
    number: PropTypes.number.isRequired
}