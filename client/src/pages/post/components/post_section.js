import React, {Component} from "react";

import Comments from "./post_comments";

let clearTimeOut_ID,clearTimeOut_exit;

export default class PostSection extends Component{
    constructor(props){
        super(props);
        this.highlight = this.highlight.bind(this);
        this.unhighlight = this.unhighlight.bind(this);
    }
    
    highlight=function(event){
        const el = event.target;
        document.querySelector(".top_half").style.top=el.offsetTop+5+"px";
        document.querySelector(".top_half").style.left=el.offsetWidth+20+"px";
        document.querySelector(".bottom_half").style.top=el.offsetTop+5+20+"px";
        document.querySelector(".bottom_half").style.left=el.offsetWidth+20+"px";  
        clearTimeout(clearTimeOut_exit);
        clearTimeOut_ID = setTimeout(()=>{
            document.querySelector(".top_half").style.left = "-5px";
            document.querySelector(".bottom_half").style.left = "-5px";
            document.querySelector(".top_half").style.width = el.offsetWidth+10+"px";
            document.querySelector(".bottom_half").style.width = el.offsetWidth+10+"px";
        },500);
    } 
    
    unhighlight = function(event){
        clearTimeout(clearTimeOut_ID);
        document.querySelector(".bottom_half").style.width = "20px";
        document.querySelector(".top_half").style.width = "20px";
        document.querySelector(".top_half").style.left=event.target.offsetWidth+20+"px";
        document.querySelector(".bottom_half").style.left=event.target.offsetWidth+20+"px";
        clearTimeOut_exit = setTimeout(()=>{
            document.querySelector(".top_half").style.left = "110%";
            document.querySelector(".bottom_half").style.left = "110%";    
        },1000);
    }    

    goTo=function(id,listNum){
        const offset_toc = document.querySelector(".PostTableContents").offsetTop;
        const scrollBy_Y = document.querySelector(`#${id}`).offsetTop + 160 - (offset_toc+listNum*18);
        window.scrollBy(0,scrollBy_Y);
    }
    
    render(){
        const {post} = this.props;
        const {sections,title,comments} = post;

        return (<div className="postContainer">
        <h1 className="title">
            {title.split("").map((ltr,idx)=>ltr===" "?<br key={idx}/>:<div key={idx}>{ltr}</div>)}
        </h1>                    
        <ul className="PostTableContents">
            {
                Object.keys(sections).map((section,idx)=>{
                    return (<li
                                key={idx}
                                onMouseOver = {this.highlight}
                                onMouseLeave = {this.unhighlight}
                                onClick={()=>this.goTo(sections[section].header.replace(/ /g,"").replace(/\?/g,"").replace(/\:/g,"").replace(/,/g,"").replace(/\!/g,"").replace(/\-/g,"").replace(/\'/g,""),idx)}
                            >
                                {sections[section].header}
                            </li>)
                })                       
            }
        </ul>
        {
            Object.keys(sections).map((section,idx)=>{
                return(
                    <div key={idx} className="sectionContainer">
                        <p id={`${sections[section].header.replace(/ /g,"").replace(/\?/g,"").replace(/\:/g,"").replace(/,/g,"").replace(/\!/g,"").replace(/\-/g,"").replace(/\'/g,"")}`} className="post_header">{sections[section].header}</p>
                        <p className="post_text">{sections[section].text}</p>
                        <iframe height='300' width="100%" scrolling='no' src={sections[section].insert} frameBorder='no' allowtransparency='true' allowFullScreen='true'>
                        </iframe>
                    </div>                       
                )
            })                            
        }
        <Comments comments={comments}/>
        <div className="top_half"></div>
        <div className="bottom_half"></div>
    </div>)        
    }
}