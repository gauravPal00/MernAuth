import  mongoose from "mongoose";

export const Connection = async()=>{
    const URL = 'mongodb://localhost:27017/data'
    try{
        await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true})
        console.log("database connected");

    }catch(error){
        console.log("error whiile connecting to database");
    }
}