import React, {Component} from "react";

import HomeBtn from "./components/homeBtn";

export default class NewPost extends Component{
    goHome = ()=>{
        this.props.history.push("/");
    }
    render(){
        return (
            <div>
                <HomeBtn goHome={this.goHome}/>
            </div>
        )
    }
}