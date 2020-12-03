const mongoose=require("mongoose")

const Userschema = new mongoose.Schema({
    username: {type: String,required: true,trim: true},
    email: {type: String,required: true,unique: true},
    password: {type: String,required: true},
    mobile: {type: String,required: true},
    wishlist: {type: Array,required: false,default: []}
    
},{timestamps:true}) 

module.exports=mongoose.model('user',Userschema)