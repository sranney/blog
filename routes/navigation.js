const router = require("express").Router();

const Posts = require("../models/posts");

router.post("/getPosts",(req,res)=>{
    Posts.find({minor_category:req.body.sectionID}).then(resultPosts=>res.send(resultPosts));
});

module.exports = router;