const { check, validationResult } = require("express-validator")

exports.validatereq=[
    
        check('username')
        .notEmpty()
        .withMessage("user Name Required"),
        check("email")
        .isEmail()
        .withMessage("Invalid Email Address"),
        check("password")
        .isLength({min:6})
        .withMessage("password must be atleast 6 character long"),
        check("mobile")
        .isLength({min:10})
        .withMessage("mobile number must be atleast 6 character long")
    
    ];

    exports.validatereqsignin=[
    
        check("email")
        .isEmail()
        .withMessage("Invalid Email Address"),
        check("password")
        .isLength({min:6})
        .withMessage("password must be atleast 6 character long")
    
    ];

exports.isreqvalidate=(req,res,next)=>{
    const error=validationResult(req);
    if(error.array().length>0){
        return res.status(400).json({
            error:error.array()[0].msg
        })
    }
    next()
}