const express =require("express")
const router = express.Router()

router.get("/",(req,res)=>{
    res.send("GET ALL USERS")
})

router.get("/:id",(req,res)=>{
    console.log(req.params)
    res.send(`User ID:${req.params.id}`)
})



module.exports=router