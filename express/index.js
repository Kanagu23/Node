const express =require("express")
const app = express()
const PORT = 4000
const userRoutes=require("./routes/userRoutes")
const filesRoutes=require("./routes/filesRouter")

// app.method("url",())
app.use(express.json())
app.use("/users",userRoutes)
app.use("/files",filesRoutes)
//client---->request---->middlware--->routing--->execute logic---->response
// Application level
//Router Level
// built-in
// app.use((req,res,next)=>{
//     console.log("Request",req.url)
//     next()
// })
// const logger=(req,res,next)=>{
//     console.log(`${req.method}:${req.url}:${new Date().toISOString()}`)
//     next()
// }
// app.use(logger)
// app.get("/",(req,res)=>{
//     res.send("Hello world!")
// })

// app.get("/about",(req,res)=>{
//     res.send("About Page!")
// })
// users--->TOTAL USERS
// USERS:id--->INDIVIDUAL
// ADD USER
// UPDATE   


// app.get("/users",(req,res)=>{
//     res.send("Users Page!")
// })
// app.post("/user",(req,res)=>{
//     console.log(req.body)
//     res.send(`Hello ${req.body.name}`)
// })
// // Dynamic routing
// app.get("/users/:id",(req,res)=>{
//     res.send(`User :${req.params.id}`)
// })


// Path Filtering
app.use('/api', (req, res, next) => {
  console.log('API Accessed:', req.path);
  next();
});

app.get('/api/users', (req, res) => res.send('Users API'));
app.get(/^\/api\/v[0-9]+$/, (req, res) => res.send('Versioned API'));
// app.get('/files/*files', (req, res) => {
//   const path = req.path; // <-- wildcard captured here
//   console.log(req.params)
//   res.send(`Requested path: ${path}`);
// });


app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
})