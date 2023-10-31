const express = require('express');
const PORT = 8000;
const app = express();

app.use('/', require('./routes/index'));

app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("successfully launched at port:", PORT);
})