import React , { useState} from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    let correctUser = true;

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
            console.log (resJson)
        })


    }
    
    return (
        <form onSubmit={ handleSubmit }>
            <h1>Login</h1>
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(values) => setEmail(values.target.value)} type="email" placeholder="" id="email" name="email"></input>
            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(values) => setPass(values.target.value)} type="password" placeholder="" id="password" name="password"></input>
            <button type="submit">Create</button>
        </form>
    );
}

export default Login;