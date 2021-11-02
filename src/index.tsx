import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {HashRouter} from "react-router-dom";
import {Container, Paper} from "@mui/material";

ReactDOM.render(
    <HashRouter>
        <Container maxWidth="sm">
            <Paper><App/></Paper>
        </Container>
    </HashRouter>,
    document.getElementById('root')
);

reportWebVitals();
