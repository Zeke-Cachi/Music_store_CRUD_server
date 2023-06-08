//LIBRARIES
const express = require('express');
const app = express();
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();
const {connect, connectUser} = require('./db/db')

//CONTROLLERS
const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api');
const userRouter = require('./routes/users')



//USE METHODS
app.use(express.json());
app.use(logger('dev'));
app.use(cors());


app.use('/', indexRouter)
app.use('/api/', apiRouter)
app.use('/user/', userRouter)


//CONNECT TO DB
connect();
connectUser();




module.exports = app