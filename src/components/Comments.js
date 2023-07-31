import React, { useState, useEffect } from 'react';

export default function Comments (props) {
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);
 
    const handleSubmit = async (values) => {
        values.preventDefault();
        const commentInput = document.getElementById('comment');
        const commentToAdd = values.target[0].value

        commentInput.value = '';
        window.location.reload()
       
        await fetch(`http://localhost:8080/addComment`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify([props.post.postid, commentToAdd]),
        })

    }

    const getComments = async () => {
        await fetch(`http://localhost:8080/getComments`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify([props.post.postid])
        })
        .then(res => res.json())
        .then(resJson => {
            const strJson = JSON.stringify(resJson);
            const body = JSON.parse(strJson);
            
            setComments(body.posts)
        })
    }

    useEffect(() => {
        getComments();
    }, [])

    return ( 
        <form onSubmit={ handleSubmit }>
            <h1>Comments ( つ•̀ω•́)つ</h1>
            <label htmlFor="comment"></label>
            <input className='comment-input' value={comment} onChange={(values) => setComment(values.target.value)} placeholder="" id="comment" name="comment"></input>
            <br></br>
            <br></br>
            <button className='new-comment-btn' type='submit'>Add New Comment</button>

            {comments.map(comment => (
                <>
                    <div className='post-box'>
                        <h2 className="category">{comment.comment}</h2>
                    </div>
                </>
            ))}
       </form>
    );
}