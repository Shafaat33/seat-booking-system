const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const users = require('./routes/api/users');
const seats = require('./routes/api/seats');
const app = express();

//models
require('./models/Seats');
require('./models/Users');
//body parser middleware
app.use(bodyParser.json());

const uri="mongodb://localhost:27017/mongodb"
mongoose.
    connect(uri)
    .then(()=>console.log('mongoDb connected'))
    .catch(err => console.log(err));

app.use('/api/users', users);
app.use('/api/seats', seats);

const port = 4000;

app.listen(port, ()=> console.log(`server started on port ${port}`));

