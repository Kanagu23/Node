const mongoDB=require('mongodb')

const mongoDBClient=mongoDB.MongoClient
const ObjectID=mongoDB.ObjectId

const mongoose = require('mongoose');

const getDataBase=async()=>{
   try{
    //  const client=await mongoDBClient.connect("mongodb://127.0.0.1:27017")
    // let database =client.db('employees')
   
    let database =await mongoose.connect("mongodb://127.0.0.1:27017/employees") // Database
 if(!database){
        console.log("DB Not Connected")
        return false
    }
    console.log("Db Connected")
    return database
   }
   catch (e){
    console.log("MONGO DB NOT CONNECTED")
   }
}

module.exports={
    getDataBase,
    ObjectID
}