import React, {Component} from "react";
import moment from "moment";

import Loader from "../../../additional_components/loader";

export default class PostListing extends Component{
    componentDidMount(){
        this.props.GetPostList()
    };
    render(){
        return (
            this.props.loading?
                <Loader/>
            :
                <ul className="post_list">
                    {
                        this.props.post_titles.map((title,idx)=>{
                            return (
                                <li className="edit_post_item" key={idx}>
                                    <div>
                                        <p className="edit_post_title">{title.title}</p>
                                        <p className="edit_post_date">{moment(title.date).format("MMMM Do YYYY")}</p>
                                    </div>
                                    <button onClick={()=>this.props.editPost(title.title)} className="edit_post_edit">Edit Post</button>
                                </li>
                            )
                        }
                    )}
                </ul>      
        )
    }
}