const passport = require('passport');
const Users = require('../models/user');
const JWTStrategy = require('passport-jwt').Strategy;

const ExtractJWT = require('passport-jwt').ExtractJwt;

const opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'transcriva'//change during deployment
}

passport.use(new JWTStrategy(opts,
    async function (jwt_payload,done) {
        try{
        console.log(jwt_payload);
        const user=await Users.findById(jwt_payload._id);
        if(user)
        {
            console.log("sign-in successfu")
            return done(null,user);
        }
        else{
            console.log("user doesnt exist")
            return done(null,false);
        }
        }   
        catch(error)
        {
            console.log(error,"error in passport-jwt");
            done(error,false);
        }
    }))


// passport.serializeUser=(user,done)=>{

// // }

// // passport.deserializeUser=(user_id,done)=>{

// // }

module.exports=passport;