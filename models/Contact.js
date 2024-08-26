const mongoose=require('mongoose');
const ContactSchema=mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    },
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
    },
    phone:{
        type:String,
    },
    type:{
        type:String,
        default:'personal'
    },
    date:{
        type:Date,
        Default:Date.now
    },
})
module.exports=mongoose.model('contact',ContactSchema);