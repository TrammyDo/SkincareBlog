import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function PostsPage () {
    const location = useLocation();
    const post = location.state
   
    if (post) {
        return ( 
            <div>
                <header>
                    <div className="nav container">
                    <Link to="/" className="logo">FaceStuff</Link>
                    <Link to="/login" className="login">Login</Link>
                    </div>
                </header>
                <section className="post-header">
                    <div className="header-content post-container">
                        <Link to="/" className="back-home">Back To Home</Link>
                        <h1 className="header-title">{post.title}</h1>
                    </div>
                </section>
                <section className="post-content post-container">
                    <h2 className="sub-heading">{post.title} Review</h2>
                    <p className="post-text">{post.body}</p>
                </section>
            </div>
        );
    }
}
