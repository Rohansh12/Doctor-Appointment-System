const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

const AdminSchema = new mongoose.Schema({
    email: { 
        type: String, 
        required: true 
    },
    password:{
        type:String,
        required: true
    },
    tokens:[
        {
            token:{
                type:String,
                required: true
            }
        }
    ]
})

//Token 
AdminSchema.methods.generateToken = async function (){
    try{
        let token = jwt.sign({_id:this._id}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token : token});
        await this.save();
        return token;
    }catch (err){
        console.log(err);
    }
}

const Admin = mongoose.model('Admin',AdminSchema);

module.exports = Admin;