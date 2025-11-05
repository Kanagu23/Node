const express= require('express')
const bodyParser=require('body-parser')
const app=express()
const dbObj=require("./db")
app.set('view engine','pug')
app.set('views',"./views")
app.use(bodyParser.urlencoded({extended:true}))

app.get("/",async (req,res)=>{
    let message=""
    const database=await dbObj.getDataBase();
    const collection=await database.collection('new_staffs')
    const employees=await collection.find({}).toArray()
    
    switch(req.query.status){
        case "1":
            message="Inserted data,Successfully"
            break
        case "2":
            message="Deleted data,Successfully"
            break
        default:
            message="Employee Details"
    }
    console.log(employees)
    res.render('employees',{employees,message})
})


app.post("/add_field",async(req,res)=>{
    const database=await dbObj.getDataBase();
    const collection=await database.collection('new_staffs')
    await collection.insertOne({name:req.body.emp_name,email:req.body.emp_email})
    res.redirect("/?status=1")
})
app.get("/delete",async(req,res)=>{
    const database=await dbObj.getDataBase();
    const collection=await database.collection('new_staffs')
    console.log(req.query.emp_id)
    await collection.deleteOne({_id:new dbObj.ObjectID(`${req.query.emp_id}`)})
    res.redirect("/?status=2")
})
app.listen(4000,()=>{
    console.log("App running @ 4000")
})