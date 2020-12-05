const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const userRouter = require('./router/user');
const filesRouter = require('./router/files');
const searchRouter = require('./router/search');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.use('/user', userRouter);
app.use('/files', filesRouter);
app.use('/search', searchRouter);
app.use('/static', express.static('assets'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


