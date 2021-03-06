import React, { Component } from 'react';
import './App.css';
import TOC from "./components.TOC.js";
import Content from "./components.Content.js";
import Subject from "./components/Subject.js";

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      subject : {title:"WEB", sub:"World Wide Web"}
    }
  }
  render(){  
    return (
      <div className="App">
        <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject>
        <TOC></TOC>
        <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
      </div>
    );
  }
}

export default App;