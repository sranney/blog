import React, {Component} from "react";

import API from "../../../api/api";

export default class PostEditor extends Component{
    constructor(props){
        super(props);
        this.state = {
            title:this.props.post?this.props.post.title:"",
            major_category:"Tutorials",
            minor_category:"Front-End",
            tags:this.props.post?this.props.post.tags:[],
            sections:this.props.post?this.props.post.sections:{
                section0:{
                    header:"",
                    text:"",
                    insert:""
                }
            }
        }
    }
    addSection = ()=>{
        const {sections} = this.state;
        const sectionNames = Object.keys(sections);
        const lastSection = sectionNames[sectionNames.length-1];
        const lastNum = parseInt(lastSection.replace("section",""));
        const newNum = lastNum+1;

        sections[`section${newNum}`]={};
        sections[`section${newNum}`].header="";
        sections[`section${newNum}`].text="";
        sections[`section${newNum}`].insert="";
        this.setState({sections});
    }
    removeSection = ()=>{
        const {sections} = this.state;
        const sectionNames = Object.keys(sections);
        const lastSection = sectionNames[sectionNames.length-1];
        delete sections[lastSection];
        this.setState({sections});
    }
    handleTitleChange=e=>this.setState({title:e.target.value});
    handleTagsChange=e=>this.setState({tags:e.target.value.split(",")});
    handleMajCatChange=e=>this.setState({major_category:e.target.value});  
    handleMinCatChange=e=>this.setState({minor_category:e.target.value});  
    handleSectionChange=e=>{
        const {sections} = this.state;
        let {name,value} = e.target;
        let section_attr = name.split("_")[0];
        let section_num = name.split("_")[1];

        sections[section_num][section_attr] = value;
        this.setState({sections});
    }
    handleSubmit_new=e=>{
        e.preventDefault();
        API.CreateNewPost(this.state).then(response=>{
            console.log(response);
            
        });
    }
    handleSubmit_edit=e=>{
        e.preventDefault();
        API.EditPost(this.state).then(response=>{
            console.log(response);
            
        });
    }
    render(){
        return (
            <form className="postForm" onSubmit={this.props.type==="new"?this.handleSubmit_new:this.handleSubmit_edit}>
            {
                this.props.type==="edit"?
                    <button 
                        type="button"
                        className="deletePost"
                        onClick={()=>this.props.deletePost(this.state.title)}
                    >
                        Delete Post
                    </button>
                :
                    null
            }
            <input 
                type="text"
                name="title"
                className="post_input_title"
                placeholder="New Post Title"
                onChange={this.handleTitleChange}
                value={this.state.title}
                required
            />
            <select className="majCat" onChange={this.handleMajCatChange} value={this.state.major_category}>
                <option value="Tutorials">Tutorials</option>
                <option value="Learning">Learning</option>
                <option value="Thinking">Thinking</option>
            </select>
            {
                
                this.state.major_category==="Tutorials"?
                    <select className="minCat" onChange={this.handleMinCatChange} value={this.state.minor_category}>
                        <option value="Front-End">Front-End</option>
                        <option value="Back-End">Back-End</option>
                    </select>
                :
                this.state.major_category==="Learning"?
                    <select className="minCat" onChange={this.handleMinCatChange} value={this.state.minor_category}>
                        <option value="Udemy">Udemy</option>
                        <option value="YouTube">YouTube</option>
                        <option value="Other">Other</option>
                    </select>
                :
                    <select className="minCat" onChange={this.handleMinCatChange} value={this.state.minor_category}>
                        <option value="Faith">Faith</option>
                        <option value="Creative">Creative</option>
                    </select>
            }
            <input
                type="text"
                name="tags"
                className="post_input_tags"
                placeholder="New Post Tags"
                onChange={this.handleTagsChange}
                value={this.state.tags?this.state.tags.join(","):""}
                required
            />
            {
                Object.keys(this.state.sections).map((section,idx)=>{
                    return(
                        <div key={idx} className="section-group">
                            <input
                                type="text"
                                name={`header_${section}`}
                                onChange={this.handleSectionChange}
                                required
                                placeholder = {`Enter ${section.replace("section","section#")} header here`}
                                value={this.state.sections[section].header}
                            />
                            <textarea 
                                type="text"
                                name={`text_${section}`}
                                onChange={this.handleSectionChange}
                                required
                                placeholder = {`Enter ${section.replace("section","section#")} text here`}
                                value={this.state.sections[section].text}
                            />
                            <input 
                                type="text"
                                name={`insert_${section}`}
                                onChange={this.handleSectionChange}
                                value={this.state.sections[section].insert}
                                placeholder={`Enter iframe link for ${section.replace("section","section#")}`}
                            />
                        </div>
                    )
                })                            
            }
            <button
                type="button"
                onClick={this.addSection}
                className="addSection"
            >
                Add Section
                <div className="border-left"></div>
                <div className="border-top"></div>
                <div className="border-right"></div>
                <div className="border-bottom"></div>                
            </button>
            {
                Object.keys(this.state.sections).length>1?                        
                    <button
                        type="button"
                        onClick={this.removeSection}
                        className="removeSection"
                    >
                        Remove Section
                        <div className="border-left"></div>
                        <div className="border-top"></div>
                        <div className="border-right"></div>
                        <div className="border-bottom"></div>                        
                    </button>
                :null
            }
            <button 
                type="submit"
                className="savePost"
            >
                {this.props.type==="new"?"Create New Post":"Save Changes to Post"}
                <div className="border-left"></div>
                <div className="border-top"></div>
                <div className="border-right"></div>
                <div className="border-bottom"></div>                
            </button>
        </form>           
        )
    }
}