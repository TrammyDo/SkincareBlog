import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NavBar () {
    return (
        <header>
            <div className="nav container">
            <Link to="/" className="logo">FaceStuff</Link>
            <Link to="/postEntry" className='login'>Create Post</Link>
            <Link to="/login" className="login">Login</Link>
            </div>
        </header> 
    );  
}