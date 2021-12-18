import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        label: 'Nibh Sem Sit Ullamcorper',
        imgPath:
            'https://a6e8z9v6.stackpathcdn.com/simplearticle/wp-content/uploads/2013/12/13412804195_74cd6a1e60_o1-1140x480.jpg',
    },
    {
        label: 'Sem Porta Mollis Parturient',
        imgPath:
            'https://a6e8z9v6.stackpathcdn.com/simplearticle/wp-content/uploads/2013/12/9514752555_0374b08302_o1-1140x480.jpg',
    },
    {
        label: 'Nullam Lorem Mattis Purus',
        imgPath:
            'https://a6e8z9v6.stackpathcdn.com/simplearticle/wp-content/uploads/2013/12/11740750174_fba22d99f3_o1-1140x480.jpg',
    },
    {
        label: 'Sem Porta Mollis Parturient',
        imgPath:
            'https://a6e8z9v6.stackpathcdn.com/simplearticle/wp-content/uploads/2013/12/9514752555_0374b08302_o1-1140x480.jpg',
    },
];
const Header = () => {


    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };


    return (
        <Box className='container mt-5 pt-4'>
            <Paper


                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    height: 50,
                    pl: 2,

                }}
            >
                <Typography variant='h5' className=' fw-bold'>{images[activeStep].label}</Typography>
            </Paper>
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {images.map((step, index) => (
                    <div key={step.label}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <Box
                                component="img"
                                sx={{

                                    display: 'block',
                                    overflow: 'hidden',
                                    width: '100%',
                                }}
                                src={step.imgPath}
                                alt={step.label}
                            />
                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                    >
                        Next
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                        ) : (
                            <KeyboardArrowRight />
                        )}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                        ) : (
                            <KeyboardArrowLeft />
                        )}
                        Back
                    </Button>
                }
            />
        </Box>
    );
};

export default Header;