import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Posts (props) {
    return (
        <div className='post'>
            {props.posts.map(post => (
                <>
                    <div className='post-box'>
                        <h2 className="category">{post.prodtype}</h2>
                        <Link 
                            to="/PostsPage"
                            state = {post} 
                            className='post-title'>
                                {post.title}
                            </Link>
                        <span className="post-date">{post.dateposted}</span>
                    </div>
                </>
            ))}
        </div>
    );
}
