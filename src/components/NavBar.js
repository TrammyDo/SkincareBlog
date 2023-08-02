import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NavBar () {
    return (
        <header>
            <div className="nav container">
            <Link to="/" className="logo">FaceStuff</Link>
            {sessionStorage.getItem("user") === "trammypoo" ? <Link to="/postEntry" className='login'>Create Post</Link> : null}
            {sessionStorage.getItem("user") === null ? <Link to="/login" className="login">Login</Link> : `Hi ${sessionStorage.getItem("user")}`}
            </div>
        </header> 
    );  
}