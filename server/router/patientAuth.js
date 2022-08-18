const express = require('express');
const bcrypt = require('bcryptjs');
const Patient = require('../model/patientSchema');
const patientAuthenticate = require('../middleware/patientauthenticate');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Doctor = require('../model/doctorSchema');

//home route for doctor
router.get('/', (req, res) => {
    res.send("Patient Page");
});

//patient register route
router.post('/signup', async (req, res) => {

    //getting the values 
    const { firstname,lastname, email, address, gender, phone, password, cpassword } = req.body;
    //checking if all the values are filled
    if (!firstname|| !lastname || !email || !address || !gender || !phone || !password || !cpassword) {
        return res.status(422).json({ error: "Fill the missing fields" });
    }

    try {
        //Check if the eamil already exists and password are same
        const userExist = await Patient.findOne({ email: email });
        if (userExist) {
            return res.status(422).json({ error: "Email already exists" });
        } else if (password != cpassword) {
            return res.status(422).json({ error: "Password are not matching" });
        } else {
            const patient = new Patient({ firstname,lastname, email, address, gender, phone, password, cpassword });

            const userRegister = await patient.save();

            if (userRegister) {
                res.status(201).json({ message: "user registered successfully" });
            } else {
                res.status(500).json({ error: "Failed to registered" });
            }
        }

    } catch (err) {
        console.log(err);
    }

});

//patient login route
router.post("/signin", async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: "Filled the missing data" });
        }
        const userLogin = await Patient.findOne({ email: email });
        //compare password and email 
        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);

            const token = await userLogin.generateAuthToken();
            console.log(token);

            res.cookie("patientjwtoken", token,{
                expires: new Date(Date.now() + 2589200000),
                httpOnly: true
            })
            
            if (!isMatch) {
                res.status(400).json({ error: "Invalid Credentials" });
            } else {
                res.json({ message: "User sigin successfully" });
            }
        } else {
            res.status(400).json({ error: "Invalid Credentials" });
        }
    } catch (err) {
        console.log(err);
    }
})

//profile page for patient
router.get('/profile',patientAuthenticate,(req, res, next) => {
    console.log("Profile page");
    res.send(req.rootUser);
    next();
})

router.post('/bookappoint', patientAuthenticate, async (req, res) => {
    try{
        const {pname, email, phone, gender, docname, date, time} = req.body;
        if(!pname || !email || !phone || !gender || !docname || !date || !time){ 
            console.log("Fill the form properly");
            return res.json({message: "Fill the form properly"});
        }
        const user = await Patient.findOne({_id:req.userID});

        if(user){
            const formdata = await user.formdata(pname, docname, date, time);
            await user.save();
            res.status(201).json({ message: "Appointment saved successfully"})
        }
    }catch(err){
        console.log(err);
    }
})

// router.delete('/delete/:id',async (req, res)=> {
//     const id = req.params.id;
//     console.log(id);
//     const deleteappointment = await Patient.findByIdAndDelete(id).exec();
//     console.log(deleteappointment);
// })


// manageappointment 
router.delete('/delete/:mainid/:id', async (req, res)=> {
    const id = req.params.id;
    const mainid = req.params.mainid;
    // console.log(mainid)
    const deleteappoint = await Patient.updateOne({'_id':mainid},{$pull:{"appointments":{'_id':id}}});
    console.log(deleteappoint);
    if(deleteappoint){
        res.status(200).json({ message: "Appointment Deleted"})
    }
})

// for editing profile 
router.post('/editprofile',patientAuthenticate, async (req, res)=>{
    try{
        const {firstname,lastname,email,address,gender,phone} = req.body;
        if(!firstname || !lastname || !email || !phone || !gender || !address){
            console.log("Fill the form properly");
            return res.json({ message:"Fill the form properly"});
        }
        const user = await Patient.updateOne({_id:req.userID},{$set:{"firstname":firstname,"lastname":lastname,"email":email,"address":address,"gender":gender,"phone":phone}});
        if(user){
            res.status(201).json({message: "Edit Successfully"});
        }
    }catch(err){
        console.log(err)
    }
})

router.get('/logout',(req,res)=>{
    console.log("Logout page");
    res.clearCookie('patientjwtoken',{path:'/'});
    res.status(200).send('User Logout');
});

module.exports = router;