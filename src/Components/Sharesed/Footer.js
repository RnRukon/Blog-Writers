import { Typography } from '@mui/material';
import React from 'react';


const Footer = () => {

    return (
        <div style={{ backgroundColor: 'rgb(25, 118, 210)' }} className="text-white">
            <div className='container py-20'>
                <div className='row '>
                    <div className='col-lg-4 col-md-6 col-sm-12'>
                        <Typography variant='h4' color='white'>Contact information</Typography>
                        <p className='text-yellow-500'>A: Kichijoji Sun Road 21/1, Tokyo.</p>
                        <p>T: + 123 456 789: + 123 456 8788</p>
                        <small>E: Aouthor@Aouthor.com</small>
                        <p>{new Date().toLocaleDateString()} || {new Date().toLocaleTimeString()}</p>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-12'>
                        <Typography variant='h4' color='white'>Blogs Writers</Typography>
                        <h5 className='text-yellow-500'>Blog Collection</h5>

                        <p>Web Develop by Rukon</p>
                        <small>E:   <a href="mailto:rukon.js@gmail.com">rukon.js@gmail.com</a></small>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-12'>
                        <Typography variant='h4' color='white'>Latest updates</Typography>
                        <p className='text-yellow-500'>Against all odds see good results</p>

                    </div>
                    <hr className=' mt-11' />
                    <span className=' text-center'>Copy &copy; Right {new Date().toDateString()}</span>

                </div>
            </div>
        </div>
    );
};

export default Footer;