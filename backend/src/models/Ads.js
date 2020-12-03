const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Adsschema = new Schema({
    productName: {type: String,required: true},
    price: {type: String,required: true},
    category: {type: String,required: true},
    detail: {type: String,required: true},
    owner: {type: String,required: true},
    images: {type: Array,required: true}
    
},{timestamps:true})
const Ads = mongoose.model('Ads',Adsschema);
module.exports = Ads;
