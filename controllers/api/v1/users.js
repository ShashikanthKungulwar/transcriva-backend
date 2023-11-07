const Users = require("../../../models/user");



module.exports.createUser = async (req, res) => {
    try {

        const user = await Users.findOne({ email: req.body.email });
        if(!user){
            const user=await Users.create({
                ...req.body
            });
            return res.status(200).json({
                message:"user created successfully"
            }); 
        }
        else{
            return res.status(422).json({
                message:'user already exist try different email'
            })
        }
    }
    catch(error){
        console.log(error,'error in users controller');
        return res.status(500).json({
            message:"Internal Server Error"
        })
    }
}
