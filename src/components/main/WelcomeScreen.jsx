import React from 'react';
import background from '../main/img/back.png'

const WelcomeScreen = () => {
    const consoleMessage = function (){return console.log("Подобрать фильм - КЛИК");}
    return (
        <div className="welcomeScreen">
            <img src={background} alt="background"/>

            <div className="welcomeMessage">
                <h1>Не знаешь, что посмотреть?</h1>
                <button onClick={consoleMessage()}>Подобрать фильм</button>
            </div>
        </div>
    );
};

export default WelcomeScreen;