import React, {Component} from "react";


import PostEditor from "./post_editor";
import PostListing from "./post_listing";

import API from "../../../api/api";

export default class EditPost extends Component{
    constructor(props){
        super(props);
        this.state={
            loading:true,
            post_titles:[],
            posts:[],
            postEdit:false,
            currentPost:{}
        }
        this.GetPostList=this.GetPostList.bind(this);
        this.deletePost=this.deletePost.bind(this);
        this.goBackToList=this.goBackToList.bind(this);
    }
    GetPostList=function(){
        console.log("hey");
        API.ADMIN_getAllPosts().then(response=>this.setState({loading:false,post_titles:response.data.post_titles,posts:response.data.posts}))
    };
    editPost=title=>this.setState({postEdit:true,currentPost:this.state.posts.filter(post=>post.title===title)[0]});
    goBackToList=()=>this.setState({postEdit:false,loading:true});
    deletePost=(title)=>API.DeletePost({title}).then(res=>this.goBackToList());
    render(){
        return (
                <div className="editPost_area">
                    <h1 className="post_sectionTitle">Edit Post</h1>
                    <button className="newPost" onClick={()=>this.props.directIntent("new")}>New Post</button>
                    {
                        !this.state.postEdit?
                            <PostListing
                                loading={this.state.loading}
                                editPost={this.editPost}
                                post_titles={this.state.post_titles}
                                GetPostList={this.GetPostList}
                            />
                        :
                            <div>
                                <button className="editPost" onClick={this.goBackToList}>Go Back to Post Listing</button>
                                <PostEditor 
                                    post={this.state.currentPost} 
                                    type="edit" 
                                    deletePost={this.deletePost}
                                />
                            </div>
                    }
                </div>
  
        )
    }
}