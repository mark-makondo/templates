import React from 'react';
import AppState from '../context/AppState';
import Home from "./home/Home";

const App = () => {
    return (
        <AppState>
            <Home/>
        </AppState>
    );
};

export default App;
