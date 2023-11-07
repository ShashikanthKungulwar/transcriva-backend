const mongoose = require('mongoose');
var db;



async function connection()
{
    try{
        db=await mongoose.connect('mongodb://127.0.0.1:27017/transcriva');
        if(db)
        {
            console.log('connected successfully to db');

        }

    }
    catch(error)
    {
        console.log("failed to connect to db",error);
    }
}

db=connection();
module.exports=db;