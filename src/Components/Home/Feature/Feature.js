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
                        <Typography> Being creative within the constraints of client briefs</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className='row'>
                            <div>
                                <img className=' img-fluid' src="https://a6e8z9v6.stackpathcdn.com/simplearticle/wp-content/uploads/2013/12/13349065283_64d09b067c_o1-750x330.jpg" alt="" />
                            </div>
                            <div >
                                <Typography>
                                    Being creative within the constraints of client briefs, budgets and timelines is the norm for most agencies. However, investing in research and development as a true, creative outlet is a powerful addition. In these side projects alone, your team members can pool their expertise to create and shape their own vision — a powerful way to develop motivation, interdisciplinary skills and close relationships.
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
                        <Typography> Powerful way to develop motivation</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className='row'>
                            <div>
                                <img className=' img-fluid' src="https://a6e8z9v6.stackpathcdn.com/simplearticle/wp-content/uploads/2013/12/13412804195_74cd6a1e60_o1-750x330.jpg" alt="" />
                            </div>
                            <div >
                                <Typography>
                                    In these side projects alone, your team members can pool their expertise to create and shape their own vision — a powerful way to develop motivation, interdisciplinary skills and close relationships.   creative outlet is a powerful addition. In these side projects alone, your team members can pool their expertise to create and shape their own vision — a powerful way to develop motivation, interdisciplinary skills and close relationships.
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
                        <Typography>In these side projects alone</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className='row'>
                            <div>
                                <img className=' img-fluid' src="https://a6e8z9v6.stackpathcdn.com/simplearticle/wp-content/uploads/2013/12/9514752555_0374b08302_o1-750x330.jpg" alt="" />
                            </div>
                            <div >
                                <Typography>
                                    Being creative within the constraints of client briefs, budgets and timelines is the norm for most agencies. However, investing in research and development as a true, creative outlet is a powerful addition.
                                    creative outlet is a powerful addition. In these side projects alone, your team members can pool their expertise to create and shape their own vision — a powerful way to develop motivation, interdisciplinary skills and close relationships.
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