import React, {Component} from "react";

export default class NavBar extends Component{
    render(){
        return (
            <div className="navigation">
                <button onClick={()=>this.props.showOverlay("tutorial")} className="navigation__button">Tutorials</button>
                <button onClick={()=>this.props.showOverlay("learning")} className="navigation__button">Learning</button>
                <button onClick={()=>this.props.showOverlay("initial")} className="navigation__button">Jobs</button>
            </div>
        );
    }
}