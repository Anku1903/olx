const Ads=require('../models/Ads')


exports.createads=(req,res)=>{
    const name = req.body.name;
    const price = req.body.price;
    const category = req.body.category;
    const detail = req.body.detail;
    const owner = req.body.owner;
    const images = req.body.images;

    const newads =new Ads ({
        productName: name,
        price: price,
        category: category,
        detail: detail,
        owner: owner,
        images: images
    })

    newads.save((err,data)=>{
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
}

exports.getallads=(req,res)=>{
    Ads.find().exec((error,ads)=>{
        if(error){
            return res.status(400).json({error})
        }
        if(ads){
            return res.status(200).json({ads})
        }
    })
}