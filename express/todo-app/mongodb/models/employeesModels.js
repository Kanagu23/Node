const mongoose = require('mongoose');

const employeesSchema= new mongoose.Schema({
    name:String,
    role:{type:String},
    salary:{type:Number,
        required:true,
        min:1,
        cast:false,
        validate: {
            validator:v=> v>50000,
            message:"Minimum 50000 required"
        }
    }
})

const employeesModel= mongoose.model('it_staffs',employeesSchema)  // Collections Name

module.exports=employeesModel