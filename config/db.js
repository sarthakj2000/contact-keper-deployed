const mongoose=require('mongoose');
const { mongoURI } = require('./keys');



const connectDB=async ()=>{
console.log("db",mongoURI)
    try{
       await mongoose.connect(mongoURI,{
            useNewUrlParser:true,
            useCreateIndex:true,
            useFindAndModify:false,
            useUnifiedTopology: true
        });
        console.log('mongo db connected');
    }
    catch(err){
        console.log(err.message);
        process.exit(1);
    }
}
module.exports=connectDB;