import React, {Component} from "react";
import NavBar from "./components/navbar";
import Title from "./components/title";
import About from "./components/about";
import Footer from "./components/footer";

export default class FrontPage extends Component{
    render=()=>{
        return (
            <div>
                <NavBar/>
                <Title/>
                <About/>
                <Footer/>
            </div>
        );
    }
}