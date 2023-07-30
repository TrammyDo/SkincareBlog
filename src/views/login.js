import React , { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar.js';

const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = async (values) => {
        values.preventDefault();
        
        await fetch(`http://localhost:8080/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify([values.target[0].value, values.target[1].value]),
        })
        .then(res => res.json())
        .then(resJson => {
            if (!resJson.value) {
                window.alert ("Incorrect email or password. Please try again.")
            }
        })
    }
    
    return (
        <form onSubmit={ handleSubmit }>
            <NavBar/>
            <div className='comment-entry'>
                <br></br>
                <h1>ʕ•́ᴥ•̀ʔっ Login</h1>
                <br></br>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(values) => setEmail(values.target.value)} type="email" placeholder="" id="email" name="email"></input>
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(values) => setPass(values.target.value)} type="password" placeholder="" id="password" name="password"></input>
                <br></br>
                <button type="submit">Log in</button>
                <br></br>
                <Link to="/registration" >Don't have an account? Click here to make one!</Link>
            </div>
        </form>
    );
}

export default Login;