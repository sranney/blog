import React, {Component} from "react";

import NewPost from "./new_post";
import EditPost from "./edit_post";

export default class PostManager extends Component{
    constructor(props){
        super(props);
        this.state={
            intent:"not defined"
        }
    }

    directIntent = intent=>{
        this.setState({intent});
    }

    render=()=>{
        return (
            this.state.intent === "not defined" ?
                <div className="admin_nav">
                    <button className="newPost" onClick={()=>this.directIntent("new")}>New Post</button>
                    <button className="editPost" onClick={()=>this.directIntent("edit")}>Edit Post</button>
                </div>
            :
                this.state.intent === "new" ?
                    <NewPost directIntent={this.directIntent}/>
                :
                    <EditPost directIntent={this.directIntent}/>
        );
    }
}