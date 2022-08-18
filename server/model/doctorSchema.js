const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

//Schema structure for doctor
const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  // city:{
  //   type:String,
  //   required: true,
  // },
  phone: {
    type: Number,
    required: true,
  },
  specialization: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cpassword: {
    type: String,
    required: true,
  },
  Qualifications:[
    {
      degree:{
      type:String,
      required: true,
    },
    experience: {
      type: String,
      required:true,
    },
  }
  ],
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

//using bcrypt function to hash the password
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
    this.cpassword = await bcrypt.hash(this.cpassword, 12);
  }
  next();
});

// generating token
userSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({token:token});
    await this.save();
    return token;
  } catch (err) {
    console.log(err);
  }
};

userSchema.methods.formdata = async function( degree , experience) {
  try{
    this.Qualifications = this.Qualifications.concat({degree , experience});
    await this.save();
  }catch(err){
    console.log(err);
  }
}

//creating the collection doctor
const Doctor = mongoose.model("DOCTOR", userSchema);

module.exports = Doctor;
