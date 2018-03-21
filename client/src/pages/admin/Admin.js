import React, {Component} from "react";

import HomeBtn from "./components/homeBtn";
import LogIn from "./components/login_form";
import PostManager from "./components/post_manager";

export default class Admin extends Component{
    constructor(props){
        super(props);
        this.state={
            status:"not authenticated"
        }
    }
    goHome = ()=>{
        this.props.history.push("/");
    }
    changeAuthStatus=status=>{
        this.setState({status});
    }

    render(){
        return (
            <div>
                <HomeBtn goHome={this.goHome}/>
                {/* {
                    this.state.status==="not authenticated"?
                        <LogIn changeAuthStatus={this.changeAuthStatus}/>
                    : */}
                        <PostManager />
                {/* } */}
            </div>
        )
    }
}