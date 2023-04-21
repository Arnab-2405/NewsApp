import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import React, { Component } from 'react'
import Navbar from './components/Navbar.js';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {

  state ={
    progress :0
  }

  setProgress= (progress)=>{
    this.setState({progress:progress})
  }
  render() {

    
    const apiKey=process.env.REACT_APP_NEWSAPP_API_KEY;
    const country="in";
    const pageSize=6;

    return (
      <>
      <BrowserRouter>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        height={3}
      />
        <Routes>
          <Route path="/" element={<News setProgress={this.setProgress} key="general" pageSize={pageSize} country={country} category={"general"} apiKey={apiKey}/>} />
          <Route path="/Business" element={<News setProgress={this.setProgress} key="business" pageSize={pageSize} country={country} category={"business"} apiKey={apiKey}/>} />
          <Route path="/Entertainment" element={<News setProgress={this.setProgress} key="entertainment" pageSize={pageSize} country={country} category={"entertainment"} apiKey={apiKey}/>} />
          <Route path="/Health" element={<News setProgress={this.setProgress} key="health" pageSize={pageSize} country={country} category={"health"} apiKey={apiKey}/>} />
          <Route path="/Science" element={<News setProgress={this.setProgress} key="science" pageSize={pageSize} country={country} category={"science"} apiKey={apiKey}/>} />
          <Route path="/Sports" element={<News setProgress={this.setProgress} key="sports" pageSize={pageSize} country={country} category={"sports"} apiKey={apiKey}/>} />
          <Route path="/Technology" element={<News setProgress={this.setProgress} key="technology" pageSize={pageSize} country={country} category={"technology"} apiKey={apiKey}/>} />
        </Routes>
        </BrowserRouter>
      </>
    )
  }
}

