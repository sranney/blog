import React, {Component} from "react";
import NavBar from "./components/navbar";
import Title from "./components/title";
import About from "./components/about";
import Footer from "./components/footer";
import Overlay from "../../additional_components/overlay";

export default class FrontPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            display:false,
            links:[],
            menuType:"",
            overlayLinks:{
                initial_tutorial:["Front-End","Back-End"],
                subtype0_tutorial:["JavaScript","CSS","APIs","Libraries"],
                subtype1_tutorial:["express","npm","apiai","web sockets"],
                initial_learning:["Udemy","YouTube","Other"],
                subtype0_learning:["Stephen Grider","Jonas Schmedtmann"],
                subtype1_learning:["Meth Meth Method","Tyler McGinnis","Net Ninja"],
                subtype2_learning:["Wes Bos"]
            }
        }
    }
    showOverlay=(btnSpec)=>{
        this.setState({links:this.state.overlayLinks[`initial_${btnSpec}`],display:true,menuType:btnSpec});
        document.querySelector("body").style.overflow="hidden";
    }
    hideOverlay=()=>{
        this.setState({display:false});
        document.querySelector("body").style.overflow="auto";
    }
    showSubMenu=(subMenu)=>{
        this.setState({links:this.state.overlayLinks[`${subMenu}_${this.state.menuType}`]});
    }
    render=()=>{
        return (
            <div>
                <NavBar showOverlay={this.showOverlay}/>
                <Title/>
                <About/>
                <Footer/>
                <Overlay 
                    ref="overlay" 
                    links={this.state.links} 
                    display={this.state.display}
                    hideOverlay={this.hideOverlay}
                    menuType={this.state.menuType}
                    showSubMenu={this.showSubMenu}
                />
            </div>
        );
    }
}