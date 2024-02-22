import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import { Header } from './components/header/Header';
import { CounterApp } from './components/main/CounterApp';
import { FirstApp } from './FirstApp';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Header/>
        <CounterApp number={10}/>
        {/* <FirstApp title='Hola'/> */}
    </React.StrictMode>
);