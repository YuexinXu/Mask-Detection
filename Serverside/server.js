const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('./config');
const User = require('./models/user.model');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true,  useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log("MongoDB database connection established successfully");
})

app.use(express.urlencoded());
app.use(express.json());

const usersRouter = require('./routes/users');
const adminRouter = require('./routes/admin');

app.use('/users', usersRouter);
app.use('/admin', adminRouter);

app.listen(port, ()=>{
    console.log(`Server is runing on port: ${port}`);
})
