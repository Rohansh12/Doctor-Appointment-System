const express = require('express');
const Doctor = require('../model/doctorSchema');
const Patient = require('../model/patientSchema');
const Admin = require('../model/adminSchema');
const adminAuthenticate = require('../middleware/adminauthenticate')
const jwt = require("jsonwebtoken");
const router = express.Router();

//home route for admin
router.get('/', (req, res) => {
    res.send("Admin Page");
});

//admin login route
router.post("/signin", async (req, res) => {
    try {
        // let token;
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: "Filled the missing data" });
        }
        const userLogin = await Admin.findOne({ email: email });
        // //compare password and email 
        if (userLogin) {
            const isMatch = await (password=="admin");
            token = await userLogin.generateToken();

            // storing cookies
            res.cookie("admintoken", token),{
                expires: new Date(Date.now() + 2589200000),
                httpOnly: true
            };

            if (!isMatch) {
                res.json({ error: "Invalid Credentials" });
            } else {
                res.json({ message: "User sigin successfully" });
            }
        } else {
            res.json({ error: "Invalid Credentials" });
        }


    } catch (err) {
        console.log(err);
    }
});

//admin manage appointment
router.get('/appointment', adminAuthenticate , async (req, res) => {

    const patient = await Patient.find({})
    res.send(patient);
});

//Patients
router.get('/patients', adminAuthenticate , async(req, res) => {
    const appointment = await Patient.find();
    res.send(appointment);
});

// delete patient 
router.delete('/delete/patient/:mainid', async (req, res)=> {
    const mainid = req.params.mainid;
    // console.log(mainid)
    const deletepat = await Patient.findOneAndDelete({'_id':mainid});
    // console.log(deletepat);
    if(deletepat){
        res.status(200).json({ message: "Patient Deleted"})
    }
})

//Doctors
router.get('/doctors', adminAuthenticate , async(req, res) => {
    const appointment = await Doctor.find();
    res.send(appointment);
});

// delete doctor 
router.delete('/delete/doctor/:mainid', async (req, res)=> {
    const mainid = req.params.mainid;
    // console.log(mainid)
    const deletedoc = await Doctor.findOneAndDelete({'_id':mainid});
    // console.log(deletepat);
    if(deletedoc){
        res.status(200).json({ message: "Doctor Deleted"})
    }
})

// let docSearch = [];
let location = '';
let specialization = '';
//search query 
router.get('/search/:location/:specialization',async (req, res)=> {
    location = req.params.location;
    specialization = req.params.specialization;
    docSearch = await Doctor.find({ address: new RegExp('^' +location + '$', 'i'),specialization: specialization},{_id:0,tokens:0,appointments:0,password:0,cpassword:0});
    res.send(docSearch);
}) 

router.get('/search',async(req,res)=>{
    const docSearch2 = await Doctor.find({ address: new RegExp('^' +location + '$', 'i'),specialization: specialization},{_id:0,tokens:0,appointments:0,password:0,cpassword:0});
    res.send(docSearch2);
    // console.log(docSearch2);
})

//logout
router.get('/logout',(req,res)=>{
    console.log("Logout page");
    res.clearCookie('admintoken',{path:'/'});
    res.status(200).send('User Logout');
});



module.exports = router;