import React, {Component} from "react";

//import react router component
import {Link} from "react-router-dom";

import moment from "moment";

export default class Menu extends Component {
    constructor(props){
        super(props);
    }

    reveal = (e)=>{
        console.log(e.target);
    }
    onMouseMove = (e)=>{
        const cutOff = 100*(e.clientX-32)/window.innerWidth;
        if(e.target.classList.contains("menuItem")){
            e.target.style.minHeight="35vh";
            e.target.style.backgroundImage=`radial-gradient(circle at ${cutOff}%, #37474f 30%,rgb(60,110,170))`;
        } else if(e.target.parentNode.classList.contains("menuItem")){
            e.target.parentNode.style.minHeight="35vh";
            e.target.parentNode.style.backgroundImage=`radial-gradient(circle at ${cutOff}%,#37474f 30%,rgb(60,110,170))`;
        } else if(e.target.parentNode.parentNode.classList.contains("menuItem")){
            e.target.parentNode.parentNode.style.minHeight="35vh";
            e.target.parentNode.parentNode.style.backgroundImage=`radial-gradient(circle at ${cutOff}%,#37474f 30%,rgb(60,110,170))`;
        }
    }
    onMouseOut=(e)=>{
        console.log(e);
        if(e.target.classList.contains("menuItem")){
            e.target.style.minHeight="";
            e.target.style.backgroundImage=``;
        }
    }
    render = ()=>{
        return (
            <div className="menuContainer">
                {
                    this.props.menuItems.map((menuItem,idx)=>{
                        return (
                            <div 
                                value="menuItem"
                                key={idx} 
                                className="menuItem" 
                                onMouseOver={this.reveal} 
                                onMouseMove={this.onMouseMove}
                                onClick={()=>this.props.goTo(menuItem.uid)}
                                onMouseOut={this.onMouseOut}
                            >
                                <div className="menuItem_link">
                                    <Link to={`/post/${menuItem.title}`}>{menuItem.title}</Link>
                                    <p>{menuItem.tags.join(",")}</p>
                                    <p>{moment(menuItem.post_date).format("MMMM Do YYYY")}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}