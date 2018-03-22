import React, {Component} from "react";

import Loader from "../../additional_components/loader";
import NavBar from "../../additional_components/navbar";

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
        console.log(this.state.post);
        return (
            <div>
                <NavBar showOverlay={this.props.showOverlay} homePage={false}/>
                {
                    !this.state.post?
                        <Loader/>
                    :
                        <div>
                            <h1 className="title">
                                {this.state.post.title.split("").map((ltr,idx)=>ltr===" "?<br key={idx}/>:<div key={idx}>{ltr}</div>)}
                            </h1>
                                <p>{this.state.post.sections["section0"].header}</p>
                                <p>{this.state.post.sections["section0"].text}</p>
                                <iframe height='265' width="100%" scrolling='no' title='Bootstrap - Modal and Button' src='//codepen.io/sranney/embed/zWZpvj/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true'>
                                </iframe>
                        </div>                       
                }

            </div>
        )
    }
}