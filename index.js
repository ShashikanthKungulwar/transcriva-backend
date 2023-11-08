const express = require('express');
const PORT = 8000;
const app = express();
const db =require('./config/mongoose_config')
const bodyParser = require('body-parser')
const cors=require('cors');
const passport = require('passport');
const JWTStrategy=require('./config/passport-jwt');
//body parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//cross orign 
app.use(cors({ origin: 'http://localhost:3000' }));

//passport init
app.use(passport.initialize());

//routes
app.use('/', require('./routes/index'));

app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("successfully launched at port:", PORT);
})