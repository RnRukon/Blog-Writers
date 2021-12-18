import axios from 'axios';

const url = 'https://frozen-retreat-80794.herokuapp.com/postABlogs';

export const createPost = (Blogs) => axios.post(url, Blogs);

