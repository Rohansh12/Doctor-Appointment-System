const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const patientSchema = new mongoose.Schema({
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
  gender: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
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
  appointments:[
    {
      pname:{
        type: String,
        required: true
      },
      docname:{
        type: String,
        required: true
      },
      date:{
        type: String,
        required: true
      },
      time:{
        type: String,
        required: true
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

patientSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
    this.cpassword = await bcrypt.hash(this.cpassword, 12);
  }
  next();
});

//generating token
patientSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id:this._id }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (err) {
    console.log(err);
  }
};

patientSchema.methods.formdata = async function(pname, docname, date, time) {
  try{
    this.appointments = this.appointments.concat({pname, docname, date, time});
    await this.save();
    return this.appointments;
  }catch(err){
    console.log(err);
  }
}

const Patient = mongoose.model("PATIENT", patientSchema);

module.exports = Patient;
