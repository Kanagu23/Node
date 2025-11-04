const express= require('express')
// const bodyParser=require('body-parser')
const app=express()
const dbObj=require("./db")
app.set('view engine','pug')
app.set('views',"./views")

app.get("/",async (req,res)=>{
    
    const database=await dbObj.getDataBase();
    const collection=await database.collection('it_staffs')
    const employees=await collection.find({}).toArray()
    res.render('employees',{employees})
})

app.listen(4000,()=>{
    console.log("App running @ 4000")
})