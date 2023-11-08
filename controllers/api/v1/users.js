const Users = require("../../../models/user");
const jwt = require('jsonwebtoken');


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
        if (user && user.password == req.body.password) {

            return res.status(200).json({
                message: "succcessfully created token",
                data: {
                    token: jwt.sign(user.toJSON(), 'transcriva', { expiresIn: '1000000' }),
                    user:{
                        email:user.email,
                        name:user.name
                    }
                }
            });
        }
        else {
            return res.status(422).json({
                message: "invalid email or password"
            })
        }
    }
    catch (error) {
        console.log(error, 'error in finding user in user controller');
        return res.status(500).json({
            message: "Internal server Error"
        });
    }
}



module.exports.updateUser = async (req, res) => {
    try {
        console.log(req.body);
        const user = await Users.findOne({ email: req.body.email });
        if (user && user.password == req.body.password) {

            let newDetails = await Users.findByIdAndUpdate(user._id, {
                email: req.body.email,
                name: req.body.name,
                password: req.body.newPassword
            })

            return res.status(200).json({
                message: "successfully changed deatails",
                data: {
                    token: jwt.sign(newDetails.toJSON(), 'transcriva', { expiresIn: '1000000' }),
                    user: {
                        email: newDetails.email,
                        name: newDetails.name
                    }
                }
            })
        }
        else {
            return res.status(422).json({
                message: "Invalid credentials"
            });
        }
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
}