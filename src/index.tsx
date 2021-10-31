import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {Container, Paper} from "@mui/material";

ReactDOM.render(
    <BrowserRouter>
        <Container maxWidth="sm">
            <Paper><App/></Paper>
        </Container>
    </BrowserRouter>,
    document.getElementById('root')
);

reportWebVitals();
