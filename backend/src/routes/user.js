const express=require("express")
const { signup,signin } = require("../controller/user")

const router=express.Router()

 const { validatereq, isreqvalidate, validatereqsignin } = require("../validators/auth")

router.post('/signin',validatereqsignin,isreqvalidate,signin)

router.post('/signup',validatereq,isreqvalidate,signup)

module.exports=router