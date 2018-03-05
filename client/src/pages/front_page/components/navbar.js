import React, {Component} from "react";

export default class NavBar extends Component{
    render(){
        return (
            <div className="navigation">
                <button className="navigation__button">Tutorials</button>
                <button className="navigation__button">Learning</button>
                <button className="navigation__button">Jobs</button>
            </div>
        );
    }
}