import React, {Component} from "react";
import API from "../../../api/api";

export default class LogIn extends Component{
    constructor(props){
        super(props);
        this.state={
            email:"",
            password:""
        }
    }
    handleFormChange=(e)=>{
        const {name,value} = e.target;
        this.setState({
            [name]:value            
        });
        document.querySelector(`#${name}`).style.backgroundImage = value.length===0?"none":`linear-gradient(to right,rgb(60,110,170) ${100*(value.length-1)/22}%,#37474f ${100*(value.length+10)/22}%)`;
    }
    handleFormSubmit=(e)=>{
        e.preventDefault();
        API.Auth(this.state.email,this.state.password)
            .then(response=>{
                console.log(response);
                this.props.changeAuthStatus(response.data);
            })
    }
    render(){
        return(
            <form className="loginForm" onSubmit={this.handleFormSubmit}>
                <h2 className="login_instr">Log In as Administrator</h2>
                <div className="form-group">
                    <input 
                        id="email" 
                        name="email"
                        type="email" 
                        onChange={this.handleFormChange} 
                        value={this.state.email}
                        placeholder=" "
                        required
                    />
                    <label htmlFor="email"><span className="fa fa-at"></span> Enter Email</label>
                </div>
                <div className="form-group">                    
                    <input 
                        id="password" 
                        name="password"
                        type="password"
                        onChange={this.handleFormChange}
                        value={this.state.password}
                        placeholder=" "
                        required
                    />
                    <label htmlFor="password"><span className="fa fa-lock"></span> Enter Password</label>
                </div>
                <button className="submitLogin">
                    Submit
                    <div className="border-left"></div>
                    <div className="border-top"></div>
                    <div className="border-right"></div>
                    <div className="border-bottom"></div>
                </button>
            </form>
        )
    }
}