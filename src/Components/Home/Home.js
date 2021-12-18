import { Box } from '@mui/material';
import React from 'react';
import Header from '../Header/Header';
import Navigation from '../Sharesed/Navigation';
import BlogsWring from './BlogsWrting/BlogsWring';
import Feature from './Feature/Feature';

const Home = () => {
    return (
        <Box>
            <Navigation />
            <Header></Header>
            <div className=' container py-24'>

                <div className='row'>
                    <div className=' col-lg-6 '>
                        <BlogsWring></BlogsWring>
                    </div>
                    <div className=' col-lg-6'>
                        <Feature></Feature>
                    </div>

                </div>


            </div>

        </Box>
    );
};

export default Home;