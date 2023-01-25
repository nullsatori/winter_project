import React from 'react';
import RandomFilms from "./RandomFilms";
import RandomPersons from "./RandomPersons";
import './MainContentContainer.scss'

const MainContentContainer = () => {
    return (
        <div className="mainContentContainer">
            <RandomFilms/>
            <RandomPersons/>
        </div>
    );
};

export default MainContentContainer;