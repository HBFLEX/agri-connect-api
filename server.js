const { urlencoded, json } = require('body-parser');
const cors = require('cors');

const express = require('express');
const app = express();

const userRouter = require('./routes/userRouter');
const postRouter = require('./routes/postRouter');
const commentRouter = require('./routes/commentRouter');
const likeRouter = require('./routes/likeRouter');

// middleware
app.use(cors({ origin: 'localhost:5000' }));
app.use(urlencoded({ extended: true }));
app.use(json());

// app routes
app.use('/api/users/', userRouter);
app.use('/api/posts/', postRouter);
app.use('/api/comments/', commentRouter);
app.use('/api/likes/', likeRouter);

// testing the api
app.get('/', (req, res) => {
    res.json({ greetings: 'hello from express api' });
})


// spin up the server
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
})

