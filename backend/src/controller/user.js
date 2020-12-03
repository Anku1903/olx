const User=require('../models/user')

exports.signup=(req,res)=>{

    User.findOne({email:req.body.email})
    .exec(async (error,user)=>{
    if(user) return res.status(400).json({
        message : "user already ragistered"
    });

    const{
        username,
        email,
        password,
        mobile,
        wishlist
    }=req.body;
    const _user =new User ({
        username,
        email,
        password,
        mobile,
        wishlist
    })

    _user.save((err,data)=>{
        if(err){
            return res.status(400).json({
                    message :"something went wrong"
            })
        }
        if(data){
            return res.status(200).json({
                message : "created successfully"
            })
        }
    })
})
}

exports.signin=(req,res)=>{
    User.findOne({email:req.body.email})
    .exec((error,user)=>{
        if(error) return res.status(400).json({ error })
        if(user){
            const {_id,username,email,mobile,wishlist,password}=user
            if(password===req.body.password){
                res.status(200).json({
                    user:{
                       _id,username,email,mobile,wishlist,password
                    }
                })
            }else{
                res.status(200).json({
                    message : "password is wrong"
                })
            }
              
            }
        else{
            return res.status(200).json({
                message : "something went wrong"
            })
        }
    })
}