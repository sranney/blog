import React,{Component} from "react";

export default class Footer extends Component{
    render(){
        return (
            <div className="footer">
                <div className="socialLink"><i className="fa fa-linkedin" aria-hidden="true"></i><span className="tooltip_content">LinkedIn</span></div>
                <div className="socialLink"><i className="fa fa-github" aria-hidden="true"></i><span className="tooltip_content">GitHub</span></div>
                <div className="socialLink"><i className="fa fa-suitcase" aria-hidden="true"></i><span className="tooltip_content">Portfolio</span></div>
            </div>
        )
    }
}