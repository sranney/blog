const mongoose = require("mongoose");
const uuidv4 = require("uuid/v4");

const PostSchema = mongoose.Schema({
    post_date:{type:Date,default:Date.now()},
    edit_date:{type:Date},
    major_category:{type:String},
    minor_category:{type:String},
    comments:{type: Array,default:[]},
    title:{type:String},
    tags:{type: Array,default:[]},
    sections:{type:Object},
    uid:{type:String,default:uuidv4()}
});

const Posts = mongoose.model("Post",PostSchema);

module.exports = Posts;
