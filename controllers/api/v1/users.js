const Users = require("../../../models/user");
const jwt=require('jsonwebtoken');


module.exports.createUser = async (req, res) => {
    try {

        const user = await Users.findOne({ email: req.body.email });
        if (!user) {
            const user = await Users.create({
                ...req.body
            });
            return res.status(200).json({
                message: "user created successfully"
            });
        }
        else {
            return res.status(422).json({
                message: 'user already exist try different email'
            })
        }
    }
    catch (error) {
        console.log(error, 'error in users controller');
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}


module.exports.createSession = async (req, res) => {
    try {
        let user = await Users.findOne({ email: req.body.email }).exec();
        if (user && user.password==req.body.password) {

            return res.status(200).json({
                message:"succcessfully created token",
                data:{
                    token:jwt.sign(user.toJSON(),'transcriva',{expiresIn:'1000000'})
                }
            });
        }
        else {
            return res.status(422).json({
                message:"invalid email or password"
            })
        }
    }
    catch(error)
    {
        console.log(error,'error in finding user in user controller');
        return res.status(500).json({
            message:"Internal server Error"
        });
    }
}

