const router = require("express").Router();

const Posts = require("../models/posts");

router.post("/createNewPost",(req,res)=>{
    Posts.findOne({title:req.body.title}).then(returnedData=>{
        if(!returnedData){
            Posts.create(req.body).then(createdData=>{
                res.send("successful creation");
            }).catch(err=>res.send("unsuccessful creation"));
        } else {
            res.send("unsuccessful creation");
        }
    })
});

router.post("/editPost",(req,res)=>Posts.update({title:req.body.title},{sections:req.body.sections}).then(returnedData=>res.send(returnedData)))

router.post("/deletePost",(req,res)=>Posts.deleteOne({title:req.body.title}).then(result=>res.send("successful")));

router.get("/allPosts",(req,res)=>{
    Posts.find({}).then(returnedData=>{
        if(returnedData){
            const post_titles = returnedData.map(post=>{
                return {title:post.title,date:post.post_date}
            });
            res.send({post_titles,posts:returnedData});
        } else {
            res.send("no posts");
        }
    })
});


module.exports = router;