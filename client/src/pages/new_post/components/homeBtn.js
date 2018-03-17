import React, {Component} from "react";

export default class HomeBtn extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="homeBtn">
                <button className="admin_home" onClick={this.props.goHome}><i className="fa fa-home"></i></button>
            </div>
        )
    }
}