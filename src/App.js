import React from "react";
import Header from "./components/Header";
import './styles/App.scss';
import WelcomeScreen from "./components/main/WelcomeScreen";
import MainContentContainer from "./components/main/MainContentContainer";

function App() {
    return (
        <div className="App">
            <Header/>
            <WelcomeScreen/>
            <MainContentContainer/>
        </div>
    );
}

export default App;
