import React, { useState } from 'react';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button, TextField } from '@mui/material';
import useAuth from '../../Hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const BlogsWritersAdded = (props) => {
    const { open, setOpen } = props;
    const handleClose = () => setOpen(false);
    const [BlogsWriter, setProductData] = useState({});
    const { user } = useAuth()
    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newBlogWriter = { ...BlogsWriter }
        newBlogWriter[field] = value;
        setProductData(newBlogWriter)

    }


    const postDate = new Date().toLocaleDateString();

    const handleAddAProduct = (e) => {
        BlogsWriter.date = postDate;
        BlogsWriter.author = user.displayName;
        BlogsWriter.userPhoto = user.photoURL;
        BlogsWriter.comment = [];

        fetch('https://frozen-retreat-80794.herokuapp.com/postABlogs', {
            method: "POST",
            headers: {

                'content-type': 'application/json'
            },
            body: JSON.stringify(BlogsWriter)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data)
                    alert('Blog Post success')
                }
            })

        e.preventDefault();
        e.target.reset();
    }


    return (
        <>
            {
                user.email &&
                <div>

                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Blog Writing
                            </Typography>
                            <Box id="modal-modal-description" sx={{ mt: 2 }}>
                                <form onSubmit={handleAddAProduct}>
                                    <TextField
                                        sx={{ width: 1 }}
                                        required
                                        id="standard-name-input"
                                        label="Product Title"
                                        type="text"
                                        name="title"
                                        variant="standard"
                                        onBlur={handleOnBlur}
                                        color="warning"
                                    /> <br />
                                    <TextField
                                        sx={{ width: 1 }}
                                        required
                                        id="standard-text-input"
                                        label="Description"
                                        type="text"
                                        name="description"
                                        variant="standard"
                                        onBlur={handleOnBlur}
                                        color="warning"
                                    /> <br />
                                    <TextField
                                        sx={{ width: 1 }}
                                        required
                                        id="standard-text-input"
                                        label="IMG URL"
                                        type="text"
                                        name="img"
                                        variant="standard"
                                        onBlur={handleOnBlur}
                                        color="warning"
                                    /> <br />

                                    <Button sx={{ width: 1, mt: 5 }} color='error' type="submit" className="feature-button" variant="contained">Blogs Writer Post</Button>
                                </form>
                            </Box>
                        </Box>
                    </Modal>
                </div>
            }
        </>
    );
};

export default BlogsWritersAdded;