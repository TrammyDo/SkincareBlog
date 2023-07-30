import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Comments () {
    return ( 
        <div>
            <h1>Comments ( つ•̀ω•́)つ</h1>
            <input className='comment-input'/>
            <br></br>
            <br></br>
            <button className='new-comment-btn'>Add New Comment</button>
       </div>
    );
}