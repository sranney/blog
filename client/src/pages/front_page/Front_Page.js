import React, {Component} from "react";

//import page components
import NavBar from "../../additional_components/navbar";
import Title from "./components/title";
import About from "./components/about";
import Footer from "../../additional_components/footer";
import Overlay from "../../additional_components/overlay";

export default class FrontPage extends Component{

    render=()=>{
        return (
            <div>
                <NavBar showOverlay={this.props.showOverlay} homePage={true}/>
                <Title/>
                <About/>
                <Footer/>
                <Overlay 
                    ref="overlay" 
                    links={this.props.links} 
                    display={this.props.display}
                    hideOverlay={this.props.hideOverlay}
                    menuType={this.props.menuType}
                    showSubMenu={this.props.showSubMenu}
                    mainMenu={this.props.mainMenu}
                />
            </div>
        );
    }
}