import React, {Component} from "react";

export default class Overlay extends Component{
    dismiss = ()=>{
        
    }
    render(){
        return(
            <div className={`overlay ${this.props.display?"shown":null}`}>
                <div onClick={this.props.hideOverlay} className={`closeBtn ${this.props.display?"shown":null}`}><i className="fa fa-times"></i></div>
                <div className={`content ${this.props.display?"shown":null}`}>
                    {this.props.links.map((link_href,idx)=>{
                        return (<div key={idx} onClick={()=>this.props.showSubMenu(`subtype${idx}`)} className="section_category">{link_href}</div>)
                    })}
                </div>
            </div>
        )
    }
}