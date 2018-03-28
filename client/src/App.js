import React, { Component } from 'react';
import './App.css';

//React Router Components
import { Router, Route, Switch, Redirect } from 'react-router';

//Page Components
import NavBar from "./additional_components/navbar";
import FrontPage from "./pages/front_page/Front_Page";
import SectionMenu from "./pages/section_menu/Section_Menu";
import Post from "./pages/post/Post";
import Admin from "./pages/admin/Admin";

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            display:false,
            links:[],
            menuType:"",
            overlayLinks:{
                initial_tutorial:["Front-End","Back-End"],
                initial_learning:["Udemy","YouTube","Other"],
                initial_thinking:["Faith","Creative"]
              },
            mainMenu:true
        }
    }

    componentDidMount=()=>{
      window.addEventListener("scroll",function(e){
          
          const cutOff = Math.round((this.scrollY/this.innerHeight)*100);
          //change linear gradient of navbar
          if(window.location.pathname !== "/admin"){
            const linearGradient = `linear-gradient(to bottom, rgba(60, 110, 170, 1) ${-890+cutOff}%,rgba(60, 110, 170, 1) ${-840+cutOff}%,rgba(30,200,160,0.7) ${-790+cutOff}%,rgba(30,200,160,0.7) ${-740+cutOff}%,rgba(60, 110, 170, 1) ${-690+cutOff}%,rgba(60, 110, 170, 1) ${-640+cutOff}%,rgba(30,200,160,0.7) ${-590+cutOff}%,rgba(30,200,160,0.7) ${-540+cutOff}%,rgba(60, 110, 170, 1) ${-490+cutOff}%,rgba(60, 110, 170, 1) ${-440+cutOff}%,rgba(30,200,160,0.7) ${-390+cutOff}%,rgba(30,200,160,0.7) ${-340+cutOff}%,rgba(60, 110, 170, 1) ${-290+cutOff}%,rgba(60, 110, 170, 1) ${-240+cutOff}%,rgba(30,200,160,0.7) ${-190+cutOff}%,rgba(30,200,160,0.7) ${-140+cutOff}%,rgba(60, 110, 170, 1) ${-40+cutOff}%,rgba(60, 110, 170, 1) ${cutOff*2}%,rgba(30,200,160,0.7) ${80+cutOff*2}%,rgba(30,200,160,0.7) 100%)`;
            document.querySelector(".navigation").style.backgroundImage = linearGradient;
          }

          if(window.location.pathname.indexOf("post")>-1){
            const commentsHeader = document.querySelector(".comments");
            const comments_offsetTop = commentsHeader.getBoundingClientRect().top;
            const scroller = document.querySelector(".scrollDiv_comments");
            const commentsForm = document.querySelector(".commentsForm");
            const commentsForm_offsetTop = commentsForm.getBoundingClientRect().top;
            if(this.innerHeight>(comments_offsetTop)){
              const comments_top_perc = comments_offsetTop/this.innerHeight;
              scroller.style.width = `${(1-comments_top_perc)>0.5?100:100*2*(1-comments_top_perc)}%`;
              if((1-comments_top_perc)>0.5){
                commentsHeader.classList.add("comments_trans");
              } else {
                commentsHeader.classList.remove("comments_trans");
              }
            }
            if((this.innerHeight-25)>commentsForm_offsetTop){
              commentsForm.classList.add("show_commentsform");
            } else {
              commentsForm.classList.remove("show_commentsform");
            }
          }
          
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
                    showOverlay={this.showOverlay}
                  />
                )
              }}
            />
            <Route 
              exact path="/admin"
              render={(routerProps)=>{
                return (
                  <Admin
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
