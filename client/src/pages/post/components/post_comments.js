import React, {Component} from "react";

export default class Comments extends Component{
    render(){
        return (
            <div>
                <div className="comments">
                    Comments
                    <div className="scrollDiv_comments"></div>
                </div>
                <form className="commentsForm">
                    <h1 className="submitComment">Submit Comment</h1>
                    <input type="text" placeholder="Enter name here"/>
                    <textarea placeholder="Enter comment here"></textarea>
                    <button>Submit Comment</button>
                </form>
                <h1 className="prevComments">Previous Comments</h1>

            </div>
        )
    }
}