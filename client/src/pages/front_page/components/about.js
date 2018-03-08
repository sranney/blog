import React, {Component} from "react";

export default class About extends Component{
    render(){
        return (
            <div className="aboutSection">
                <p className="about_p">Tutorials on JavaScript, CSS, libraries and APIs.</p>
                <p className="about_p">Reviews on online courses from Udemy, YouTube and other sources</p>
                <p className="about_p">Thoughts on bootcamps and the employment process for developers</p>
            </div>
        );
    }
}