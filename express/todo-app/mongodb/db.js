const mongoDB=require('mongodb')

const mongoDBClient=mongoDB.MongoClient

const getDataBase=async()=>{
   try{
     const client=await mongoDBClient.connect("mongodb://127.0.0.1:27017")
    let database =client.db('emp')
    if(!database){
        console.log("DB Not Connected")
        return false
    }
    return database
   }
   catch (e){
    console.log("MONGO DB NOT CONNECTED")
   }
}

module.exports={
    getDataBase
}