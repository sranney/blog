import axios from "axios";

const API = {
    Auth:(email,password)=>axios.post("/signin",{email,password}),
    CreateNewPost:(postData)=>axios.post("/admin/createNewPost",postData),
    EditPost:(postTitle)=>axios.post("/admin/editPost",postTitle),
    ADMIN_getAllPosts:()=>axios.get("/admin/allPosts"),
    DeletePost:(postTitle)=>axios.post("/admin/deletePost",postTitle)
}

export default API;