import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Registration = () => { 
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = async (values) => {
        values.preventDefault();
       
         await fetch(`http://localhost:8080/registration`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify([values.target[0].value, values.target[1].value, values.target[2].value]),
        })
        .then(res => res.json())
        .then(resJson => {
            if (!resJson.value) {
                window.alert("Username already taken, try again.")
            }
        })
    }

    return (
        <form onSubmit={ handleSubmit }>
            <h1>Create Account</h1>
            <label htmlFor="username">Username</label>
            <input value={username} onChange={(values) => setUsername(values.target.value)} type="username" placeholder="" id="username" name="username"></input>
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(values) => setEmail(values.target.value)} type="email" placeholder="" id="email" name="email"></input>
            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(values) => setPass(values.target.value)} type="password" placeholder="" id="password" name="password"></input>
            <button type="submit">Create</button>
        </form>
    );
}

export default Registration;