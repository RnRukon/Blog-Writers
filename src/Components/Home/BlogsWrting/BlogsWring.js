import React, { useEffect, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Avatar, Button, IconButton, Input } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SendIcon from '@mui/icons-material/Send';
import useAuth from '../../Hooks/useAuth';
import PostShareSocialMedia from '../Feature/PostShareSocialMedia';

const BlogsWring = () => {
    let [blogs, setBlogs] = useState([]);
    const { user } = useAuth();
    const [commentText, setCommentText] = useState("");
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    useEffect(() => {
        fetch("https://frozen-retreat-80794.herokuapp.com/Blogs")
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    const [expanded] = React.useState('panel1');
    const comment = {};
    const CommentDate = new Date().toLocaleDateString();
    comment.commentDate = CommentDate;
    comment.CommentUser = user.displayName;
    comment.commentUserPhoto = user.photoURL;
    comment.commentText = commentText;


    const handleComment = (id) => {
        fetch(`https://frozen-retreat-80794.herokuapp.com/comment/${id}`, {
            method: "PUT",
            headers: {

                'content-type': 'application/json'
            },
            body: JSON.stringify(comment)
        })
            .then(res => res.json())
            .then(data => {

                if (data.modifiedCount) {
                    alert('Comment success')
                    fetch("https://frozen-retreat-80794.herokuapp.com/Blogs")
                        .then(res => res.json())
                        .then(data => setBlogs(data))
                }
            })

    }


    const handleLike = (id) => {
        fetch(`https://frozen-retreat-80794.herokuapp.com/like/${id}`, {
            method: "PUT",
            headers: {

                'content-type': 'application/json'
            },
            body: JSON.stringify({ like: true })
        })
            .then(res => res.json())
            .then(data => {

                if (data.modifiedCount) {

                    fetch("https://frozen-retreat-80794.herokuapp.com/Blogs")
                        .then(res => res.json())
                        .then(data => setBlogs(data))
                }
            })

    }



    return (
        <div className='container'>

            <h2 className=' text-3xl text-green-500'>Blogs</h2>
            <div className=''>
                {
                    blogs?.reverse().map(blog =>
                        <Accordion key={blog?._id} className="mt-3" expanded={expanded === 'panel1'}>

                            <AccordionSummary
                                expandIcon={<Avatar alt="Remy Sharp" style={{ transform: 'rotate(180deg)' }} src={blog?.userPhoto} />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >

                                <Typography>Author: {blog?.author ? blog?.author : "Name is Not Found!"}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className='row'>
                                    <div className='col-lg-4'>
                                        <img className=' img-fluid' src={blog?.img} alt="" />

                                        <Typography>{blog?.title}</Typography>

                                        {/* "like for Handler" */}

                                        <IconButton color={`secondary`} onClick={() => {
                                            user.email ?
                                                handleLike(blog._id) :
                                                alert('Please first Login')
                                        }} aria-label="add to favorites">
                                            <FavoriteIcon />
                                        </IconButton>

                                        <span>Like: {
                                            blog?.likes?.length ? blog?.likes?.length : '0'

                                        }</span>


                                        {/* *************** ShareLink Share Link **************** */}


                                        <IconButton
                                            onClick={handleClickOpen}
                                            aria-label="share">
                                            <ShareIcon />
                                        </IconButton>
                                        <PostShareSocialMedia open={open} setOpen={setOpen} />


                                    </div>
                                    <div className='col-lg-8'>
                                        <Typography className=' text-justify'>
                                            {blog?.description?.slice(0, 180)} ...
                                        </Typography>
                                        <Link className=' text-decoration-none' to={`detailsBlog/${blog._id}`}>
                                            <Button size="small">Learn More</Button>
                                        </Link>
                                        <small className=' text-info'>Post Date: {blog?.date}</small>

                                    </div>
                                </div>
                            </AccordionDetails>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography>Comments {blog?.comments?.length ? blog?.comments?.length : '0'}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <AccordionSummary
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Avatar alt="Remy Sharp" src={user?.photoURL} />

                                        <Typography style={{ marginLeft: '10px' }}>{user?.displayName ? user?.displayName : "Users"}</Typography>


                                        <Input
                                            className=' inline'
                                            required
                                            aria-label="empty textarea"
                                            placeholder="Type user Comments"
                                            style={{ width: 200, margin: '0 5px' }}
                                            onChange={(e) => setCommentText(e.target.value)}
                                        />
                                        <Button onClick={() => {
                                            user.email ? handleComment(blog?._id) : alert("Please first Login")
                                        }} size="small" endIcon={<SendIcon />}>Send</Button>

                                    </AccordionSummary>


                                    {/* ***************** Blogs Comments ************************ */}

                                    <div className=' navbar-nav-scroll'>
                                        {
                                            blog?.comments?.reverse().map((userComment, index) =>
                                                <div key={index}>
                                                    <hr />
                                                    <AccordionSummary>
                                                        <Avatar alt="Remy Sharp" src={userComment?.commentUserPhoto} />
                                                        <Typography>{userComment?.CommentUser}</Typography>
                                                    </AccordionSummary>
                                                    <p className=' inline-block'>{userComment?.commentText}</p> <br />
                                                    <small>{userComment?.commentDate}</small>
                                                </div>
                                            )
                                        }
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                        </Accordion>

                    )
                }
            </div>
        </div>

    );
};

export default BlogsWring;