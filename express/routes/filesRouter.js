const express =require("express")
const router = express.Router()

router.get("/",(req,res)=>{
    res.send("GET ALL Files")
})

router.get("/:name",(req,res)=>{
    res.send(`File Name:${req.params.name}`)
})



module.exports=router