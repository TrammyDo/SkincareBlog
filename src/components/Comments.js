import React, { useState } from 'react';

export default function Comments (props) {
    const [comments, setComments] = useState('');

    const handleSubmit = async (values) => {
        values.preventDefault();
        const commentInput = document.getElementById('comments');
        const commentToAdd = values.target[0].value

        console.log('gdsa')
        commentInput.value = '';
       
        await fetch(`http://localhost:8080/addComment`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify([props.post.postid, commentToAdd]),
        })
    }

    return ( 
        <form onSubmit={ handleSubmit }>
            <h1>Comments ( つ•̀ω•́)つ</h1>
            <label htmlFor="comments"></label>
            <input className='comment-input' value={comments} onChange={(values) => setComments(values.target.value)} placeholder="" id="comments" name="comments"></input>
            <br></br>
            <br></br>
            <button className='new-comment-btn' type='submit'>Add New Comment</button>
       </form>
    );
}