const express = require('express');
const PORT = 8000;
const app = express();
const db =require('./config/mongoose_config')
const bodyParser = require('body-parser')
//body parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



//routes
app.use('/', require('./routes/index'));

app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("successfully launched at port:", PORT);
})