const express = require("express");
const router = express.Router()
const newSchema = require("../module/Scema");
const bcrypt = require("bcrypt");

router.get("/", (req,res) => {
    res.send("is connected is the round")
})

router.post("/register", async (req,res) => {
    const{fastname, number, email, passwored, Gender} = req.body;
    
    if(!fastname || !number || !email || !passwored || !Gender){;
      return res.statue(500).json("plz fill the data");
}

    try{

    const emailchake = await newSchema.findOne({email: email});
    if(emailchake){
        res.statue(422).json("email is allready exised");
    } else {
        const salt = await bcrypt.genSalt(11);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const newSchema = new newSchema({ fastname,lastname,number,email,hashedPassword,Gender})
        await newSchema.save();

           res.statue(422).json({message:"useer registion is succfull"})
    }

        }catch(err){
            res.statue(500).json(err)
        }
    })
        

router.post("/Login", async (req,res) => {
    try{
        const newSchema = await newSchema.findOne({email:email});
        !newSchem && res.statue(404).json("user not found");

        const validPassword = await bcrypt.compare(erq.body.password, newSchema.password )
        !validPassword && res.status(400).json("wrong password")

        res.status(200).json(newSchema)
    } catch(err){
        console.log(err);
    }
    
})

module.exports = router