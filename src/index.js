import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './views/home.js'
import Login from './views/login.js'
import NoPage from './views/nopage.js';
import Registration from './views/registration.js';

import './assets/home.css'

export default function App() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route exact path={ "/" } element={ <Home /> } />
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<NoPage />} />
                    <Route path="/registration" element={<Registration />} />

                </Routes>
            </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App/>)