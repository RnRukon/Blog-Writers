import { Alert, AlertTitle, Button, Container, Grid, LinearProgress, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';


import { NavLink, useLocation, useHistory } from 'react-router-dom';

import GoogleIcon from '@mui/icons-material/Google';
import useAuth from '../Hooks/useAuth';
// import useAuth from '../Hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { loginUser, isLoading, signInWithGoogle, authError } = useAuth();
    const location = useLocation();
    const history = useHistory()
    const login = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }

    const handleLoginSubmit = (e) => {
        // console.log(loginData)
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault()
        e.target.reset();
    }

    return (
        <Box>


            <Container>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12} sm={6} md={6} sx={{ mt: 5 }}>
                        {
                            isLoading ? <LinearProgress /> :
                                <form onSubmit={handleLoginSubmit}>
                                    <TextField
                                        sx={{ width: 1 }}
                                        required
                                        id="standard-password-email"
                                        label="You Email"
                                        type="email"
                                        name="email"
                                        autoComplete="current-email"
                                        variant="standard"
                                        onChange={login}
                                    /> <br />
                                    <TextField
                                        sx={{ width: 1 }}
                                        required
                                        id="standard-password-input"
                                        label="Password"
                                        type="password"
                                        name="password"
                                        autoComplete="current-password"
                                        variant="standard"
                                        onChange={login}
                                    />
                                    <Button type="submit" sx={{ mt: 5 }} className="feature-button" variant="contained">Login</Button>

                                </form>
                        }

                        {isLoading ? <LinearProgress /> : <NavLink to='/register'><Button>New User? Please Register</Button></NavLink>}
                        {authError && <Alert severity="error">
                            <AlertTitle>Error</AlertTitle>
                            {authError} <strong>check it out!</strong>
                        </Alert>}

                        <p>-------------------or------------------</p>
                        <Button onClick={() => signInWithGoogle(location, history)} variant="contained" sx={{ width: '200px' }}><GoogleIcon />Google Sign In</Button>

                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        {/* <img style={{ width: '100%', height: 'auto' }} src={LoginImg} alt="" /> */}
                    </Grid>


                </Grid>
            </Container>

        </Box>
    );
};

export default Login;