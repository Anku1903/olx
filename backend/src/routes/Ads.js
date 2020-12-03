const express=require("express")
const { getallads, createads } = require("../controller/ads")

const router=express.Router()

router.get('/getads',getallads)

router.post('/createads',createads)

module.exports=router