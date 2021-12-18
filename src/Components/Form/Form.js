import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import useStyles from './styles';
import { createPost } from '../../actions/posts';
import useAuth from '../Hooks/useAuth';

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ title: '', displayName: '', img: '' });
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();
  const { user } = useAuth();
  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ title: '', displayName: '', img: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    postData.date = new Date().toLocaleDateString();
    postData.author = user.displayName;
    postData.userPhoto = user.photoURL;
    postData.comment = [];
    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    }
  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Editing "${post.title}"` : 'Blog Writing'}</Typography>

        <TextField name="title" required variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />

        <TextField name="message" required variant="outlined" label="Blog" fullWidth multiline rows={4} value={postData.displayName} onChange={(e) => setPostData({ ...postData, displayName: e.target.value })} />

        <div className={classes.fileInput}>
          <FileBase type="file" required multiple={false} onDone={({ base64 }) => setPostData({ ...postData, img: base64 })} />
        </div>

        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

export default Form;
