const mongoose=require('mongoose')
const menuSchema=new mongoose.Schema({
    pid:{
        type:String,
        required:true
      
    },
    name:{
        type:String,
        required:true
    },
   
    price:{
        type:Number,
        required:true
    },
    size:{
        type:String,
        required:true
    },
    path:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model("pizzaapp",menuSchema);