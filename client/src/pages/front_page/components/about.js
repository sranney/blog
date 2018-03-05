import React, {Component} from "react";

export default class About extends Component{
    render(){
        return (
            <div className="aboutSection">
                <p className="about_p">My name is Spencer. Welcome to my blog site.</p>
                <p className="about_p">You'll find tutorials on JavaScript, CSS, libraries and APIs.</p>
                <p className="about_p">I post reviews on online courses that I am taking</p>
                <p className="about_p">as well as notes and thoughts on getting developer jobs.</p>
                <p className="about_p">Thanks for visiting.</p>
            </div>
        );
    }
}