import React, {Component} from "react";

export default class NavBar extends Component{
    render(){
        return (
            <div className="navigation">
                {
                    !this.props.homePage?
                        <button className="navigation__button" onClick={this.props.goHome}><i className="fa fa-home"></i></button>
                    :
                        null
                }
                <button onClick={()=>this.props.showOverlay("tutorial")} className="navigation__button">Tutorials</button>
                <button onClick={()=>this.props.showOverlay("learning")} className="navigation__button">Learning</button>
                <button onClick={()=>this.props.showOverlay("initial")} className="navigation__button">Thinking</button>
            </div>
        );
    }
}