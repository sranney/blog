import React, {Component} from "react";

import Comments from "./post_comments";

export default class PostSection extends Component{
    render(){
        return (<div className="postContainer">
        <h1 className="title">
            {this.props.post.title.split("").map((ltr,idx)=>ltr===" "?<br key={idx}/>:<div key={idx}>{ltr}</div>)}
        </h1>                    
        {
            Object.keys(this.props.post.sections).map((section,idx)=>{
                return(
                    <div key={idx} className="sectionContainer">
                        <p className="post_header">{this.props.post.sections[section].header}</p>
                        <p className="post_text">{this.props.post.sections[section].text}</p>
                        <iframe height='300' width="100%" scrolling='no' src={this.props.post.sections[section].insert} frameborder='no' allowtransparency='true' allowfullscreen='true'>
                        </iframe>
                    </div>                       
                )
            })                            
        }
        <Comments comments={this.props.post.comments}/>
    </div>)        
    }
}