const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;

const ExtractJWT = require('passport-jwt').ExtractJwt;

const opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'transcriva'//change during deployment
}

passport.use(new JWTStrategy(opts,
    function (jwt_payload,done) {
        
    }))