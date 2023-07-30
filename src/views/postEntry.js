import React, { useState } from 'react';
import NavBar from '../components/NavBar.js';

const PostEntry = () => {
    const [title, setTitle] = useState('');
    const [postBody, setBody] = useState('');
    const [prodType, setProdType] = useState('')
    const [date, setDate] = useState('')

    const handleSubmit = async (values) => {
        values.preventDefault();
        
        await fetch(`http://localhost:8080/postEntry`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify([values.target[0].value, values.target[1].value, values.target[2].value, values.target[3].value]),
        })
        .then(res => res.json())
        .then(resJson => {
        })
    }
    
    return (
        <form onSubmit={ handleSubmit }>
            <NavBar/>
            <div className="comment-entry">
                <h1>Create Post</h1>
                <label htmlFor="title">Title</label>
                <input value={title} onChange={(values) => setTitle(values.target.value)} placeholder="" id="title" name="title"></input>
                <label htmlFor="postBody">Body</label>
                <input value={postBody} onChange={(values) => setBody(values.target.value)} placeholder="" id="postBody" name="postBody"></input>
                <label htmlFor="prodType">Product Type</label>
                <input value={prodType} onChange={(values) => setProdType(values.target.value)} placeholder="" id="prodType" name="prodType"></input>
                <label htmlFor="date">Date</label>
                <input value={date} onChange={(values) => setDate(values.target.value)} placeholder="" id="date" name="date"></input>
                <br></br>
                <button type="submit">Create</button>
            </div>
        </form>
    );
  };
  
  export default PostEntry;