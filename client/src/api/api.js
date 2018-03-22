import axios from "axios";

const API = {
    //user api calls
    getPosts:(search)=>axios.post("/users/getPosts",search),
    getPost:(post_id)=>axios.post("/users/getPost",post_id),
    
    //admin api calls
    Auth:(email,password)=>axios.post("/signin",{email,password}),
    CreateNewPost:(postData)=>axios.post("/admin/createNewPost",postData),
    EditPost:(postTitle)=>axios.post("/admin/editPost",postTitle),
    ADMIN_getAllPosts:()=>axios.get("/admin/allPosts"),
    DeletePost:(postTitle)=>axios.post("/admin/deletePost",postTitle)
}

export default API;