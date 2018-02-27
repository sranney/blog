import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Page "Front Page"
import FrontPage from "./pages/front_page/Front_Page";

class App extends Component {
  render() {
    return (
      <div className="App">
        <FrontPage/>
      </div>
    );
  }
}

export default App;
