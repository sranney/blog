import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class Overlay extends Component{
    dismiss(){
        console.log(this.props.display);
        console.log(document.querySelector(".overlay"));
        document.querySelector(".overlay").classList.remove("shown");
        document.querySelector(".closeBtn").classList.remove("shown");
        document.querySelector(".overlay .content").classList.remove("shown");
    }
    render(){
        return(
            <div className={`overlay ${this.props.display?"shown":null}`}>
                <div onClick={this.props.hideOverlay} className={`closeBtn ${this.props.display?"shown":null}`}><i className="fa fa-times"></i></div>
                <div className={`content ${this.props.display?"shown":null}`}>
                    {
                        this.props.links.map((link_href,idx)=>{
                            return (
                                this.props.mainMenu?
                                    <div key={idx} onClick={()=>this.props.showSubMenu(`subtype${idx}`)} className="section_category">{link_href}</div>
                                :
                                    <Link key={idx} to={`/section/${link_href.replace(/ /g,"_")}`} onClick={this.dismiss} className="section_category">{link_href}</Link>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}