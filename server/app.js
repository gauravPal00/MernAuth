import express from 'express'
import { loginValidate, registrationValidation } from './Valiates.js';
import Data from './model/userSchema.js';
import bcrypt from 'bcrypt'
import  jwt  from 'jsonwebtoken';
import tokenAuth from './tokenVerify/tokenAuth.js';

const router = express.Router()

router.post("/register", async (req, res) => {
    let { error } = registrationValidation(req.body)
    if (error) {
        return res.status(400).send(error.details[0].message)
    }
    const usernameExit = await Data.findOne({ username: req.body.username })
    if (usernameExit) {
        return res.status(406).send("username is already exist")
    }
    try {
        const hashPassword = await bcrypt.hash(req.body.password, 10)
        const User = new Data({
            name: req.body.name,
            username: req.body.username,
            password: hashPassword
        })
        const data = await User.save()
        res.status(200).send({ data, message: "successfully added" })
    }
    catch (error) {
        res.status(400).send(error)
    }
})

router.post('/login',async(req,res)=>{
    
    let { error } = loginValidate(req.body)
    if(error){
        return res.status(400).send(error.details[0].message)
    }
    const {username,password} = req.body
    const user = await Data.findOne({username:req.body.username})
    if(!user){
        return res.status(400).send("username is not found")
    }

    const validPassword = await bcrypt.compare(password,user.password)
    if(!validPassword){
        return res.status(400).send("invalid password")
    }
    const token = jwt.sign({ _id: username._id,username}, "token");
    res.header('auth-token', token).send({token,success:true})
})

router.get('/welcome',tokenAuth,async(req,res)=>{
    try {
        const user = req.user
        res.status(200).send(user)
      }
      catch (error) {
     res.status(400).send({message:error.message})
      }
})

export default router;
