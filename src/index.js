import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home'

import './assets/home.css'

class App extends React.Component {
    render () {
        return (
            <Router>
                <Routes>
                    <Route exact path={"/"} element={ <Home />}/>
                </Routes>
            </Router>
        );
    }
}

render (<App />, window.document.getElementById ('app'));