import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
    <body>
        <header>
            <div class="nav container">
                <a href="#" class="logo">FaceStuff</a>
                <Link to="/login" className='login'>Login</Link>
                <Link to="/postEntry" >Create Post</Link>
            </div>
        </header>
        
        <section class="home" id="home">
            <div class="home-text container">
                <h2 class="home-title">Trammy's Skincare Blog</h2>
                <span class="home-subtitle">Random reviews on skincare I have tried (づ｡◕‿‿◕｡)づ</span>
            </div>
        </section>

        <div class="post-filter container">
            <span class="filter-item active-filter" data-filter='all'>All</span>
            <span class="filter-item" data-filter='cleansers'>Cleansers</span>
            <span class="filter-item" data-filter='toners'>Toners</span>
            <span class="filter-item" data-filter='serums'>Serums</span>
            <span class="filter-item" data-filter='moisturizers'>Moisturizers</span>
            <span class="filter-item" data-filter="sunscreens">Sunscreens</span>
        </div>

        <section class="post container">



            
        </section>
    </body>
    );
}

export default Home;