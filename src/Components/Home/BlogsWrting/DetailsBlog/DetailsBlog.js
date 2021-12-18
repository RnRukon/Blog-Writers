import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import Navigation from '../../../Sharesed/Navigation';

const DetailsBlog = () => {
    const [blogDetails, setBlogDetails] = useState({}) || '';
    const { id } = useParams();
    useEffect(() => {
        fetch(`https://frozen-retreat-80794.herokuapp.com/blogDetails/${id}`)
            .then(res => res.json())
            .then(data => setBlogDetails(data))
    }, [id, setBlogDetails])

    const [expanded] = React.useState('panel1');
    return (
        <div>
            <Navigation />
            <div style={{ marginTop: '100px' }} className=' container'>


                <Accordion className="mt-3" expanded={expanded === 'panel1'}>
                    <AccordionSummary
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >



                    </AccordionSummary>
                    <AccordionDetails>
                        <div className='row'>
                            <div className='container'>
                                <img className='container img-fluid' src={blogDetails?.img} alt="" />
                            </div>
                            <div className='py-8 '>
                                <h1 className=' text-uppercase text-decoration-underline fw-bold'>{blogDetails?.title}</h1>
                                <h5>{blogDetails?.author}</h5>
                                <small>{blogDetails?.date}</small>
                            </div>
                            <div >
                                <Typography className='container' style={{
                                    textAlign: 'justify', columnCount: '3',
                                    columnGap: '40px',
                                    columnRule: "4px double #f00"
                                }}>
                                    {blogDetails?.description}

                                </Typography>
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    );
};

export default DetailsBlog;