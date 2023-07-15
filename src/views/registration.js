import React, { useState } from 'react';

const Registration = () => { 
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = async (values) => {
        values.preventDefault();
       
         await fetch(`http://localhost:8080/registration`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify([values.target[0].value, values.target[1].value]),
        })
        .then(res => res.json())
        .then(resJson => {
            console.log (resJson)
        })
    }

    return (
        <form onSubmit={ handleSubmit }>
            <h1>Create Account</h1>
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(values) => setEmail(values.target.value)} type="email" placeholder="" id="email" name="email"></input>
            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(values) => setPass(values.target.value)} type="password" placeholder="" id="password" name="password"></input>
            <button type="submit">Create</button>
        </form>
    );
}

export default Registration;