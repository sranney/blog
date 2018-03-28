import React, {Component} from "react";

import Loader from "../../additional_components/loader";
import NavBar from "../../additional_components/navbar";
import PostSection from "./components/post_section";

import API from "../../api/api";

export default class Post extends Component{
    constructor(props){
        super(props);
        this.state={
            post:null
        }
    }
    componentDidMount=()=>API.getPost({postID:this.props.match.params.postID}).then(response=>this.setState({post:response.data}));
    
    render=()=>{

        return (
            <div>
                <NavBar showOverlay={this.props.showOverlay} homePage={false}/>
                {
                    !this.state.post?
                        <Loader/>
                    :
                    <PostSection post={this.state.post}/>
                }

            </div>
        )
    }
}