import React from 'react';
import './Header.scss';

const Header = () => {
    return (
        <header className="header">

            <div className="title">
                <h1>KINOMAP</h1>
                <hr/>
                <h3>movies</h3>
            </div>
            <div className="navMenu">
                <div>
                    <p>Рекомендации</p>
                    <hr/>
                </div>
                <div>
                    <p>Подборки</p>
                    <hr/>
                </div>
                <div>
                    <p>О проекте</p>
                    <hr/>
                </div>
            </div>

        </header>
    );
};

export default Header;