const mongoose = require('mongoose');

const employeesSchema= new mongoose.Schema({
    name:{type:String},
    role:{type:String},
    salary:{type:Number,default:50000}
})

const employeesModel= mongoose.model('it_staffs',employeesSchema)  // Collections Name

module.exports=employeesModel