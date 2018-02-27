import React, {Component} from "react";

export default class NavBar extends Component{
    render(){
        return (
            <div className="navigation">
                <button className="navigation__button">JavaScript</button>
                <button className="navigation__button">CSS</button>
                <button className="navigation__button">Udemy Journals</button>
                <button className="navigation__button">Currently Learning</button>
            </div>
        );
    }
}