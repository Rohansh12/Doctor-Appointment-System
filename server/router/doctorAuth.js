const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Doctor = require('../model/doctorSchema');
const router = express.Router();
const authenticate = require('../middleware/authenticate');
const Patient = require('../model/patientSchema');

//home route for doctor
router.get('/', (req, res) => {
    res.send("Doctor Page");
});

//doctor register route
router.post('/signup', async (req, res) => {

    //getting the values 
    const { firstname,lastname, email, address, phone, specialization, password, cpassword } = req.body;
    //checking if all the values are filled
    if (!firstname|| !lastname || !email || !address || !phone || !specialization || !password || !cpassword) {
        return res.status(422).json({ error: "Fill the missing fields" });
    }

    try {
        //Check if the eamil already exists and password are same
        const userExist = await Doctor.findOne({ email: email });
        if (userExist) {
            return res.status(422).json({ error: "Email already exists" });
        } else if (password != cpassword) {
            return res.status(422).json({ error: "Password are not matching" });
        } else {
            const doctor = new Doctor({ firstname,lastname , email, address, phone, specialization, password, cpassword });

            const userRegister = await doctor.save();

            if (userRegister) {
                res.status(201).json({ message: "User registered successfully" });
            } else {
                res.status(500).json({ error: "Failed to registered" });
            }
        }

    } catch (err) {
        console.log(err);
    }

});

//doctor login route
router.post("/signin", async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: "Filled the missing data" });
        }
        const userLogin = await Doctor.findOne({ email: email });
        //compare password and email 
        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);

            const token = await userLogin.generateAuthToken();
            console.log(token);

            res.cookie("jwtoken", token,{
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

//profile us page
router.get('/profile', authenticate, (req, res, next) => {
        console.log("Profile page");
        res.send(req.rootUser);
        next();
});

// manageappoint for doctor 
router.get('/appointments', authenticate , async(req, res) => {
    // console.log(req.rootUser);
    // console.log(req.docname);
    const docfirstname = req.docfirstname;
    const doc = await Patient.find({
        appointments: {
          $elemMatch: {
            docname: docfirstname
          }
        }
      });
    // console.log(doc);
    res.send(doc);
});

//patient delete
router.delete('/delete/:mainid/:id', async (req, res)=> {
    const id = req.params.id;
    const mainid = req.params.mainid;
    console.log("Main id: "+mainid)
    console.log(id)
    const deleteappoint = await Patient.updateOne({'_id':mainid},{$pull:{"appointments":{'_id':id}}});
    // console.log(deleteappoint);
    if(deleteappoint){
        res.status(200).json({ message: "Appointment Deleted"})
    }
})

//patient details (doctor)
// router.post('/patdetails/:patname', authenticate , async(req, res) => {
//     const patname = req.params.patname;
//     console.log(patname)
//     const info = await Patient.find({
//         firstname: patname
//     });
//     console.log(info);
//     res.send(info);
// })
router.get('/patdetails', authenticate , async(req, res) => {
    const id = req.userID;
    const firstname = req.docfirstname;
    // console.log(id)
    // console.log(firstname)
    const patdetails = await Patient.find({docname:firstname})
    // console.log(patdetails);
    res.send(patdetails);
})

//for search
router.get('/search',async(req, res) => {
    const firstname = req.docfirstname;
    const docSearch = await Doctor.find({docname:firstname},{firstname:1,_id:0,email:1,specialization:1,address:1})
    res.send(docSearch);
    // console.log(docSearch);
})

// for editing profile
router.post('/editprofile', authenticate, async (req, res) => {
    try{
        const {firstname,lastname,email,specialization,phone,address,degree,experience} = req.body;
        if(!firstname || !lastname || !email || !specialization || !phone || !address || !degree || !experience){ 
            console.log("Fill the form properly");
            return res.json({message: "Fill the form properly"});
        }
        const user = await Doctor.findOne({_id:req.userID});

        if(user){
            const formdata = await user.formdata(degree , experience);
            await user.save();
            res.status(201).json({ message: "Edit Successfully"});
        }
    }catch(err){
        console.log(err);
    }
})
let id='';
router.post('/patdetails/:id',authenticate , async(req, res) => {
    id = req.params.id;
    // console.log(id);
})
router.get('/history',authenticate , async(req, res) => {
    console.log(id)
    const detials = await Patient.findById({"_id":id},{"appointments":1});
    console.log(detials)
    res.send(detials);
})


// for logout 
router.get('/logout',(req,res)=>{
    console.log("Logout page");
    res.clearCookie('jwtoken',{path:'/'});
    res.status(200).send('User Logout');
});

module.exports = router;