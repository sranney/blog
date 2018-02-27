import React, {Component} from "react";
import Title from "./components/title";
import About from "./components/about";
import NavBar from "./components/navbar";

export default class FrontPage extends Component{
    render=()=>{
        return (
            <div>
                <NavBar/>
                <Title/>
                <About/>
            </div>
        );
    }
}