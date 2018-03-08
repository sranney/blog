import React,{Component} from "react";

//import page components
import NavBar from "../../additional_components/navbar";
import Footer from "../../additional_components/footer";
import Overlay from "../../additional_components/overlay";
import Menu from "./components/menu";

export default class SectionMenu extends Component{
    constructor(props){
        super(props);
    }
    goHome=()=>this.props.history.push("/");
    render=()=>{
        return (
            <div>
                <NavBar showOverlay={this.props.showOverlay} homePage={false} goHome={this.goHome}/>
                <div className="title">
                    {
                        this.props.match.params.sectionID.replace("_"," ").split("").map((letter,idx)=>{
                            return (
                                letter!==" "?
                                    <div key={idx}>{letter}</div>
                                :
                                    <span key={idx}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            )
                        })
                    }
                </div>
                <Menu/>
                <Footer/>
                <Overlay
                    links={this.props.links} 
                    display={this.props.display}
                    hideOverlay={this.props.hideOverlay}
                    menuType={this.props.menuType}
                    showSubMenu={this.props.showSubMenu}
                    mainMenu={this.props.mainMenu}
                />
            </div>
        )
    }
}