import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import useAuth from '../../Hooks/useAuth';
import Form from '../../Form/Form';

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
    const { user } = useAuth()
    const [currentId, setCurrentId] = useState(0);

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

                                <Form currentId={currentId} setCurrentId={setCurrentId}></Form>

                            </Box>
                        </Box>
                    </Modal>
                </div>
            }
        </>
    );
};

export default BlogsWritersAdded;