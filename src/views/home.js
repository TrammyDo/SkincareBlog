import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Posts from '../components/Posts.js'

const Home = () => {
    const [posts, setPosts] = useState([])

    const getPosts = async () => {
        await fetch(`http://localhost:8080/getPosts`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then(res => res.json())
        .then(resJson => {
            const strJson = JSON.stringify(resJson);
            const body = JSON.parse(strJson);
            
            setPosts(body.posts);
        })
    }

    useEffect(() => {
        getPosts();
    }, [])
    
    return (
        <div className='homepage'>
            <header>
                <div className="nav container">
                    <a href="#" className="logo">FaceStuff</a>
                    <Link to="/login" className='login'>Login</Link>
                    <Link to="/postEntry">Create Post</Link>
                </div>
            </header>
            
            <section className="home" id="home">
                <div className="home-text container">
                    <h2 className="home-title">Trammy's Skincare Blog</h2>
                    <span className="home-subtitle">Random reviews on skincare I have tried (づ｡◕‿‿◕｡)づ</span>
                </div>
            </section>

            <div className="post-filter container">
                <span className="filter-item active-filter" data-filter='all'>All</span>
                <span className="filter-item" data-filter='cleansers'>Cleansers</span>
                <span className="filter-item" data-filter='toners'>Toners</span>
                <span className="filter-item" data-filter='serums'>Serums</span>
                <span className="filter-item" data-filter='moisturizers'>Moisturizers</span>
                <span className="filter-item" data-filter="sunscreens">Sunscreens</span>
            </div>

            <section className="post container">
                {posts.length > 0 ? <Posts posts={posts} /> : <p>Loading...</p>}
            </section>
        </div>
    );
}

export default Home;
