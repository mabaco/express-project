const express= require("express")
const router= express.Router()
const users= [{name:"Kyle"}, {name:"Sally"}]

router.use(logger)

router.get("/", (req, res)=>{
   console.log("query parameter is "+req.query.name) 
    res.send("User List")
})
router.get("/new", (req,res)=>{
    res.render("users/new")
})
router.post("/", (req, res)=> {
    const isValid=false;
    if(isValid){
        users.push({firstName: req.body.firstName})
        res.redirect(`/users/${users.length-1}`)
    }else{
        console.log("error")
        res.render("users/new", {firstName: req.body.firstName})
    }
    console.log(req.body.firstName) 
    
})
// this
router.route("/:id")
.get((req,res)=>{
    res.send(`Get user with id ${req.params.id}`)
})
.put((req,res)=>{
    res.send(`Update user with id ${req.params.id}`)
})
.delete((req,res)=>{
    res.send(`delete user with id ${req.params.id}`)
})

//can replace all of this
// router.get("/:id", (req,res)=>{
//     res.send(`Get user with id ${req.params.id}`)
// } )

// router.put("/:id", (req,res)=>{
//     req.params.id
//     res.send(`Get user with id ${req.params.id}`)
// } )
// router.delete((req,res) =>{
//     res.send(`delete user with id ${req.params.id}`)
// })

router.param("id", (req,res,next,id)=>{
    req.user= users[id]
    

    next()
})
function logger(req, res, next){
    console.log(req.originalUrl)
    next()
    }
    
module.exports = router