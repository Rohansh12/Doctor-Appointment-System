const jwt = require('jsonwebtoken');
const Doctor = require('../model/doctorSchema');

const authenticate = async (req, res, next) => {
    try{
        const token = req.cookies.jwtoken;
        if(!token){
            console.log("Token not found", token);
        }
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

        const rootUser = await Doctor.findOne({_id:verifyToken._id,"tokens.token":token});
        if(!rootUser){
            throw new Error('User not found')
        }
        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;
        req.docname = rootUser.firstname + " " + rootUser.lastname;
        req.docfirstname = rootUser.firstname;
        next();

    }catch(err){
        res.status(401).send('Unauthorized:No token provided');
        console.log(err);
    }
}

module.exports = authenticate