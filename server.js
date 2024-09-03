const express= require('express')
const app= express()
const userRouter= require("./routes/users")

// app.use(express.static("public"))
//  used for serving static sites, in this case public folder
app.use(express.urlencoded({extended:true}))
    //used to get data from forms
app.use(express.json())
    //used to parse JSON
app.use("/users", userRouter) 
app.set("view engine", "ejs")
app.get("/", (req, res)=> {
    // res.setHeader( "Content-Security-Policy",
    //     "default-src 'self'; font-src 'self' data:; img-src 'self' data:; script-src 'self'; style-src 'self';"
    // )
    res.render("index", {text:"World"})
})


app.listen(3000)