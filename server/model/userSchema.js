import mongoose  from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String,required:true },
  username: { type: String,unique: true },
  password: { type: String },
})

const Data = mongoose.model("Data", userSchema);
export default  Data;