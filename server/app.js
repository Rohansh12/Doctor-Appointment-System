
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const cookies = require('cookie-parser');
const app = express();

dotenv.config({path:'./config.env'});
require('./db/conn');

app.use(cookies());
app.use(express.json());

// const Doctor = require('./model/userSchema');
// app.use(require('./router/doctorAuth'));
// app.use(require('./router/patientAuth'));
app.use("/admin",require('./router/adminAuth'));
app.use("/doctor",require('./router/doctorAuth'));
app.use("/patient",require('./router/patientAuth'));
app.use(express.static(__dirname + '/public'));
const PORT = process.env.PORT;


//middleware
// const middleware = (req,res,next) => {
//     console.log('Hello middleware');
//     next();
// }

app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>')
});

// app.get('/about', middleware, (req, res) => {
//     res.send('<h1>Hello about</h1>')
// });

app.get('/contact', (req, res) => {
    res.send('<h1>Hello contact</h1>')
});

app.get('/signin', (req, res) => {
    res.send('<h1>Hello signin</h1>')
});

app.get('/signup', (req, res) => {
    res.send('<h1>Hello signup</h1>')
});

app.listen(PORT, () => {
    console.log('server is running on http://localhost:'+PORT)
})
