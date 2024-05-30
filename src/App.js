import './App.css';

import React, { Component } from 'react'
import { NavBar } from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  
  Route,
 Routes,
 HashRouter
} from "react-router-dom";

export default class App extends Component {
  pageSize=9;
  country="in";
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <HashRouter>
        <NavBar/>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        
      />
        {/* <News setProgress={this.setProgress} pageSize={this.pageSize} country={this.country} category="sports" /> */}
        <Routes>
          <Route exact path="/" element={<News setProgress={this.setProgress} key="General" pageSize={this.pageSize} country={this.country} category="General" />}/>
          <Route exact path="/Business" element={<News setProgress={this.setProgress} key="Business" pageSize={this.pageSize} country={this.country} category="Business" />}/>
          <Route exact path="/Entertainment" element={<News setProgress={this.setProgress} key="Entertainment" pageSize={this.pageSize} country={this.country} category="Entertainment" />}/>
          <Route exact path="/Health" element={<News setProgress={this.setProgress} key="Health" pageSize={this.pageSize} country={this.country} category="Health" />}/>
          <Route exact path="/Science" element={<News setProgress={this.setProgress} key="Health" pageSize={this.pageSize} country={this.country} category="Science" />}/>
          <Route exact path="/Sports" element={<News setProgress={this.setProgress} key="Sports" pageSize={this.pageSize} country={this.country} category="Sports" />}/>
          <Route exact path="/Technology" element={<News setProgress={this.setProgress} key="Technology" pageSize={this.pageSize} country={this.country} category="Technology" />}/>


          
        </Routes>
        </HashRouter>
      </div>
    )
  }
}

 
