const jwt = require("jsonwebtoken");
const Patient = require("../model/patientSchema");

const patientAuthenticate = async(req, res, next) => {
    try{
        const token = req.cookies.patientjwtoken;
        if(!token){
            console.log("Token not found", token);
        }
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

        const rootUser = await Patient.findOne({_id:verifyToken._id,"tokens.token":token});
        if(!rootUser){
            throw new Error("User not found");
        }
        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;
        next();

    }catch(err){
        res.status(401).send('Unauthorized:No token provided');
        console.log(err);
    }
};

module.exports = patientAuthenticate