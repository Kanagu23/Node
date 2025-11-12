const express= require('express')
const bodyParser=require('body-parser')
const app=express()
const dbObj=require("./db")
const employeesModel= require("./models/employeesModels")
app.set('view engine','pug')
app.set('views',"./views")
app.use(bodyParser.urlencoded({extended:true}))
let dataBase=dbObj.getDataBase()

app.get("/",async (req,res)=>{
    let message=""

    const employees=await employeesModel.find({})
    
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
 
    res.render('employees',{employees,message})
})


app.post("/add_field",async(req,res)=>{
    // const database=await dbObj.getDataBase();
    // const collection=await database.collection('new_staffs')
    console.log(req.body.emp_email)
    const newEmp= new employeesModel({name:12547,email:req.body.emp_email,salary:75000})
    await newEmp.save()
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