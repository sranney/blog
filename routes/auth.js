const router = require("express").Router();

const correctEmail = process.env.ADMIN_EMAIL || require("../../secrets/blog").ADMIN_EMAIL;
const correctPassword = process.env.ADMIN_PASSWORD || require("../../secrets/blog").ADMIN_PASSWORD;

router.post("/signin",(req,res)=>{
    console.log(req.body);
    const {email,password} = req.body;
    if(email===correctEmail&&password===correctPassword){
        res.send("authenticated");
    } else {
        res.send("not authenticated");
    }        
});

module.exports = router;