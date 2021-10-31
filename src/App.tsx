import React from 'react';
import './App.css';
import style from "./App.module.css"
import {Routes} from './components/Routes/Routes';

function App() {
    return (
        <div className={style.main}>
            <Routes/>
        </div>
    );
}

export default App;
