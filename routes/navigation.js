const router = require("express").Router();

const Posts = require("../models/posts");

router.post("/getPosts",(req,res)=>{
    Posts.find({minor_category:req.body.sectionID}).then(resultPosts=>res.send(resultPosts));
});

router.post("/getPost",(req,res)=>{
    Posts.find({uid:req.body.postID}).then(resultPosts=>res.send(resultPosts[0]));
});

module.exports = router;