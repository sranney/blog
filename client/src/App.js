import React, { Component } from 'react';
import './App.css';

//React Router Components
import { Router, Route, Switch, Redirect } from 'react-router';

//Page Components
import NavBar from "./additional_components/navbar";
import FrontPage from "./pages/front_page/Front_Page";
import SectionMenu from "./pages/section_menu/Section_Menu";
import Post from "./pages/post/Post";
import NewPost from "./pages/new_post/New_Post";

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            display:false,
            links:[],
            menuType:"",
            overlayLinks:{
                initial_tutorial:["Front-End","Back-End"],
                subtype0_tutorial:["JavaScript","CSS","APIs","Libraries"],
                subtype1_tutorial:["node.js, npm","web sockets","databases"],
                initial_learning:["Udemy","YouTube","Other"],
                subtype0_learning:["Stephen Grider","Jonas Schmedtmann"],
                subtype1_learning:["Meth Meth Method","Tyler McGinnis","Net Ninja"],
                subtype2_learning:["Algorithms","Medium","Wes Bos"]
            },
            mainMenu:true
        }
    }

    componentDidMount=()=>{
      window.addEventListener("scroll",function(e){

          const cutOff = Math.round((this.scrollY/this.innerHeight)*100);
          //change linear gradient of navbar
      
          const linearGradient = `linear-gradient(to bottom, rgba(30,200,160,0.7) ${-70+cutOff}%,rgba(60, 110, 170, 1) ${-40+cutOff}%,rgba(60, 110, 170, 1) ${cutOff*2}%,rgba(30,200,160,0.7) ${80+cutOff*2}%,rgba(30,200,160,0.7) 100%)`;
          document.querySelector(".navigation").style.backgroundImage = linearGradient;
          
      });      
    }

    showOverlay=(btnSpec)=>{
        this.setState({links:this.state.overlayLinks[`initial_${btnSpec}`],display:true,menuType:btnSpec,mainMenu:true});
        document.querySelector("body").style.overflow="hidden";
    }
    hideOverlay=()=>{
        this.setState({display:false});
        document.querySelector("body").style.overflow="auto";
    }
    showSubMenu=(subMenu)=>{
        this.setState({links:this.state.overlayLinks[`${subMenu}_${this.state.menuType}`],mainMenu:false});
    }  
    render() {
      return (
        <div className="App">
          <Switch>
            <Route
              exact path="/"
              render={(routerProps)=>{
                return (
                  <FrontPage
                    {...routerProps}
                    links={this.state.links}
                    display={this.state.display}
                    menuType={this.state.menuType}
                    overlayLinks={this.state.overlayLinks}
                    showOverlay={this.showOverlay}
                    hideOverlay={this.hideOverlay}
                    showSubMenu={this.showSubMenu}
                    display={this.state.display}
                    mainMenu={this.state.mainMenu}
                  />
                )
              }}
            />
            <Route
              exact path="/section/:sectionID"
              render={(routeProps)=>{
                return (
                  <SectionMenu
                    {...routeProps} 
                    links={this.state.links}
                    display={this.state.display}
                    menuType={this.state.menuType}
                    overlayLinks={this.state.overlayLinks}
                    showOverlay={this.showOverlay}
                    hideOverlay={this.hideOverlay}
                    showSubMenu={this.showSubMenu}
                    display={this.state.display} 
                    mainMenu={this.state.mainMenu}                  
                  />
                )
              }}
            />
            <Route
              exact path="/post/:postID"
              render={(routerProps)=>{
                return (
                  <Post
                    {...routerProps}
                  />
                )
              }}
            />
            <Route 
              exact path="/admin"
              render={(routerProps)=>{
                return (
                  <NewPost
                    {...routerProps}
                  />
                )
              }}
            />
          </Switch>
        </div>
      );
    }
}
