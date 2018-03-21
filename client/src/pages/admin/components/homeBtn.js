import React, {Component} from "react";

export default class HomeBtn extends Component{
    constructor(props){
        super(props);
    }

    impress=(event)=>{
        const button = document.querySelector(".admin_home");
        const buttonBox = document.querySelector(".homeBtn");
        let mousedown = false;
        let mousePosX,mousePosY;        
        mousePosX = (event.clientX-event.target.offsetLeft)/100;
        mousePosY = (event.clientY-event.target.offsetTop)/100;
        button.style.transform=`rotateY(${-15+30*mousePosX}deg) rotateX(${15-30*mousePosY}deg) ${mousedown? `translateX(${2.5-mousePosX*5}px)`:"translateX(0px)"} ${mousedown? `translateY(${2.5-mousePosY*5}px)`:"translateY(0px)"} ${mousedown? `translateZ(-12.5px)`:`translateZ(-15px)`}`;
        button.style.backgroundImage=`radial-gradient(circle at ${100*(1-mousePosX)}% ${100*(1-mousePosY)}%,rgba(255,255,255,0.5),transparent),radial-gradient(circle at center,rgb(60,110,170),#37474f)`;
        button.style.boxShadow=`${(-10*mousePosX+5)*(mousedown?0.5:1)}px ${(-10*mousePosY+5)*(mousedown?0.5:1)}px 20px black`;
        button.style.textShadow=`${10*mousePosX}px ${10*mousePosY}px 20px rgba(0,0,0,.7)`;
    };
    
    leaveBtn=(event)=>{
        const button = document.querySelector(".admin_home");
        const buttonBox = document.querySelector(".homeBtn");
        button.style.transform=`none`;
        button.style.backgroundImage=`radial-gradient(circle at center,rgb(60,110,170),#37474f)`;
        button.style.boxShadow="0px 0px 20px rgba(0,0,0,0.7)";
        button.style.textShadow="1px 1px 5px rgba(0,0,0,.4)";
    };

    render(){
        return (
            <div className="homeBtn" onMouseMove={this.impress} onMouseOut={this.leaveBtn}>
                <i className="fa fa-home admin_home" onClick={this.props.goHome}></i>
            </div>
        )
    }
}