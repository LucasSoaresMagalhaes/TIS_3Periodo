import passport from "passport"
import LocalStrategy from "passport-local"
import User from "./models/User"

const auth = passport.use(new LocalStrategy({
    usernameField: "email",
    passwordField: "password",
},
    async (email, password, done) => {
        try {
            const user = await User.findOne({ email: email });
            if (!user) return done(null, false);
            const isMatch = await user.matchPassword(password);
            if (!isMatch)
                return done(null, false);
    
            return done(null, user);
        } catch (error) {
            console.log(error)
            return done(error, false);
        }
    }
))

passport.serializeUser((function(user, cb){
    process.nextTick(function(){
        return cb(null, {id: user.id, username: user.email})
    })
}))

passport.deserializeUser((function(user, cb){
    process.nextTick(function(){
        return cb(null, user)
    })
}))

export default auth

