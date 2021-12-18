import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const Feature = () => {
    const [expanded] = React.useState('panel1');
    return (
        <div>
            <h3 className=' text-3xl text-green-500'>Features</h3>
            <div className=''>
                <Accordion className="mt-3  " expanded={expanded === 'panel1'}>

                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography> Lorem ipsum dolor sit amet</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className='row'>
                            <div>
                                <img className=' img-fluid' src="https://a6e8z9v6.stackpathcdn.com/simplearticle/wp-content/uploads/2013/12/13349065283_64d09b067c_o1-750x330.jpg" alt="" />
                            </div>
                            <div >
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion className="mt-3" expanded={expanded === 'panel1'}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography> Lorem ipsum dolor sit amet</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className='row'>
                            <div>
                                <img className=' img-fluid' src="https://a6e8z9v6.stackpathcdn.com/simplearticle/wp-content/uploads/2013/12/13412804195_74cd6a1e60_o1-750x330.jpg" alt="" />
                            </div>
                            <div >
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion className="mt-3" expanded={expanded === 'panel1'}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography> Lorem ipsum dolor sit amet</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className='row'>
                            <div>
                                <img className=' img-fluid' src="https://a6e8z9v6.stackpathcdn.com/simplearticle/wp-content/uploads/2013/12/9514752555_0374b08302_o1-750x330.jpg" alt="" />
                            </div>
                            <div >
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </div>
                        </div>
                    </AccordionDetails>

                </Accordion>
            </div>
        </div>
    );
};

export default Feature;