import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PostEntry = () => {
    const [title, setTitle] = useState('');
    const [postBody, setBody] = useState('');
    const [cuisineType, setCuisine] = useState('')
    const [date, setDate] = useState('')

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
            <h1>Create Post</h1>
            <label htmlFor="title">Title</label>
            <input value={title} onChange={(values) => setTitle(values.target.value)} placeholder="" id="title" name="title"></input>
            <label htmlFor="postBody">Body</label>
            <input value={postBody} onChange={(values) => setBody(values.target.value)} placeholder="" id="postBody" name="postBody"></input>
            <label htmlFor="date">Date</label>
            <input value={date} onChange={(values) => setDate(values.target.value)} placeholder="" id="date" name="date"></input>
            <label htmlFor="cuisineType">Cuisine Type</label>
            <input value={cuisineType} onChange={(values) => setDate(values.target.value)} placeholder="" id="cuisineType" name="cuisineType"></input>
            <button type="submit">Create</button>
        </form>
    );
  };
  
  export default PostEntry;