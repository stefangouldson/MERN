const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/user');

dotenv.config({path: './.env'});

const app = express();

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB is connected"));

app.get('/', (req,res)=>{
    res.status(200).json({
        message: "All Working"
    })
})

app.post('/register', (req,res) => {
    console.log(req.body);
    res.status(200).json({
        message:'Form Data recieved'
    })
})

app.get('/test', (req,res)=>{
    res.status(200).json({
        message:'Test Value',
        user: 'StefanG'
    })
})

app.listen(5000,(req,res) => {
    console.log('Running on 5000');
})