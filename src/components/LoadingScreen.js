import React from 'react';
import logo from './logo3.png'; // Importe sua logo aqui
import './LoadingScreen.css';

function LoadingScreen() {
    return (
        <div id="loadingScreen">
            <img src={logo} alt="Logo da Empresa" />
            <div className="loader"></div>
        </div>
    );
}

export default LoadingScreen;
