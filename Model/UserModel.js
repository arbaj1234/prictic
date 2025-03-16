import mongoose from "mongoose";

const Userschema=new mongoose.Schema({
    name:{
        type:'string',
        required:[true,'user name is required']
    },
    email:{
        type:'string',
        requred:[true,'user email is requred'],
        unique:[true,'email is token']
    },
    password:{
        type:"string",
        requred:[true,'user password is requred']
    }
},{timestamps:true});


const Usermodel=mongoose.model('Usermodel',Userschema);

export default Usermodel