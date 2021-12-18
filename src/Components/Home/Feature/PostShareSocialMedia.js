import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { ShareSocial } from 'react-share-social'

const style = {

    backgroundColor: 'rgb(0, 0, 85)'
};

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function PostShareSocialMedia(props) {

    const { open, setOpen } = props;
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>

            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Share Post on SocialMedia"}</DialogTitle>
                <DialogContent>

                    <ShareSocial
                        id="alert-dialog-slide-description"
                        style={style}

                        url={window.location.href}
                        socialTypes={['facebook', 'twitter', 'reddit', 'linkedin']}
                    />

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}