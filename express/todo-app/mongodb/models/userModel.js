const mongoose =require("mongoose")

const addressSchema= new mongoose.Schema({
     city:{type:String,required:true},
    state:{type:String,required:true}
})
const usersSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        min:1,
        max:120,
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
    },
    address:addressSchema,
    neighbour: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Users"
    },
    employee:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"it_staffs"
    },
    createdAt:{
        type:Date,
        default: new Date
    }
})

const UsersModel= mongoose.model("Users",usersSchema)
module.exports=UsersModel