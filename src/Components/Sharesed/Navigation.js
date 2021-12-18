import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Divider } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import useAuth from '../Hooks/useAuth';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BookIcon from '@mui/icons-material/Book';
import BlogsWritersAdded from '../Dashboard/BlogsWritersAdded/BlogsWritersAdded';
const Navigation = () => {
    const { user, logout, signInWithGoogle } = useAuth();
    const theme = useTheme();
    const useStyles = makeStyles({

        menuItem: {
            [theme.breakpoints.down('sm')]: {
                display: 'none !important'
            }
        },
        navLogo: {
            [theme.breakpoints.down('sm')]: {
                textAlign: 'right'
            }
        },
        menuIcon: {

            [theme.breakpoints.up('sm')]: {
                display: 'none !important'
            }
        },
        sidebarListItem: {
            textDecoration: 'none',
            color: 'white',
            fontWeight: 'bold'
        },
        sidebar: {
            backgroundColor: 'hotpink !important'
        }

    });
    const { menuItem, menuIcon, navLogo, sidebarListItem, sidebar } = useStyles();



    const [state, setState] = React.useState(false);



    const list = (
        <Box

            sx={{ width: 250 }}
            role="presentation"
            onClick={() => setState(false)}
            onKeyDown={() => setState(false)}
        >

            <Toolbar />
            <Divider />
            <List>
                <Link to='/' className={sidebarListItem}>
                    <ListItem button  >
                        <HomeIcon />
                        Home

                    </ListItem>
                </Link>
                <Link to='/allBlogs' className={sidebarListItem}>
                    <ListItem button  >
                        <BookIcon />
                        All Blogs

                    </ListItem>
                </Link>

                {
                    user.email ? <List>
                        <Box className={sidebarListItem}>
                            <ListItem button >
                                <AccountCircleIcon />
                                {user.displayName}

                            </ListItem>
                        </Box>
                        <ListItem button onClick={logout} sx={{ color: 'white', fontWeight: 'bold' }}>
                            <LogoutIcon />
                            Logout
                        </ListItem>
                    </List>
                        :
                        <Box>
                            <ListItem button onClick={signInWithGoogle} >
                                <LoginIcon />
                                Login
                            </ListItem>
                        </Box>
                }


            </List>
        </Box>
    );


    const handleOpen = () => setOpen(true);
    const [open, setOpen] = React.useState(false);
    return (
        <Box >
            <Box sx={{ flexGrow: 1 }}>
                <AppBar sx={{ position: 'fixed', zIndex: 100 }}>
                    <Toolbar>
                        <IconButton
                            className={menuIcon}
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={() => setState(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography className={navLogo} variant="h6" component="div" sx={{ flexGrow: 1, cursor: 'pointer' }}>
                            <NavLink to='/' className={sidebarListItem}>Blogs Writers
                            </NavLink>
                        </Typography>
                        <Toolbar sx={{ cursor: 'pointer' }} className={menuItem}>
                            <Link to='/'>
                                <Button style={{ color: 'white' }}>Home</Button>
                            </Link>
                            <Link to='/allBlogs'>
                                <Button style={{ color: 'white' }}>All Blogs</Button>
                            </Link>

                            {
                                user.email && <Button style={{ color: 'white' }} onClick={handleOpen}>Now Write A Blog</Button>
                            }
                            <BlogsWritersAdded
                                open={open}
                                setOpen={setOpen}
                            />


                            {
                                user.email ? <Box>
                                    <Link to='/'><Button style={{ color: 'white' }}> {user.displayName}</Button></Link>
                                    <Link to='/chats'><Button style={{ color: 'white' }}>Messenger</Button></Link>
                                    <Button onClick={logout} style={{ color: 'white' }}>Logout</Button>
                                </Box>

                                    :
                                    <Box><Button onClick={signInWithGoogle} style={{ color: 'white' }}>Login</Button></Box>
                            }

                        </Toolbar>
                    </Toolbar>
                </AppBar>
            </Box>

            <div className={sidebar}>

                <React.Fragment >

                    <Drawer

                        PaperProps={{
                            sx: {
                                backgroundColor: "rgb(25, 118, 210)",
                                color: "orange"
                            }
                        }}
                        open={state}
                        onClose={() => setState(false)}
                    >
                        {list}
                    </Drawer>
                </React.Fragment>

            </div>
        </Box>
    );
};

export default Navigation;