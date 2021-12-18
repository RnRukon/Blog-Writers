import React from 'react';
import BlogsWring from '../Home/BlogsWrting/BlogsWring';
import Navigation from '../Sharesed/Navigation';


const AllBlogs = () => {

    return (
        <div className=' pb-24'>
            <Navigation></Navigation>
            <div style={{ marginTop: '100px' }}>
                <BlogsWring />
            </div>

        </div >
    );
};

export default AllBlogs;