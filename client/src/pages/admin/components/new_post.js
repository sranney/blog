import React, {Component} from "react";

import PostEditor from "./post_editor";

import API from "../../../api/api";

export default class NewPost extends Component{
    constructor(props){
        super(props);
        this.state = {
            title:this.props.post?this.props.post.title:"",
            sections:this.props.post?this.props.post.sections:{
                section0:{
                    header:"",
                    text:"",
                    insert:""
                }
            }
        }
    }
    render(){
        return (
            <div className="newPost_area">
                <h1 className="post_sectionTitle">New Post</h1>
                <button className="editPost" onClick={()=>this.props.directIntent("edit")}>Edit Post</button>
                <PostEditor type="new"/>
            </div>            
        )
    }
}