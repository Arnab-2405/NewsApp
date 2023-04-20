import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import React, { Component } from 'react'
import Navbar from './components/Navbar.js';
import News from './components/News';

export default class App extends Component {
  render() {

    const apiKey="2b21f840ae484ddbaf065ee469d944f7";
    const country="in";
    const pageSize=12;

    return (
      <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<News key="general" pageSize={pageSize} country={country} category={"general"} apiKey={apiKey}/>} />
          <Route path="/Business" element={<News key="business" pageSize={pageSize} country={country} category={"business"} apiKey={apiKey}/>} />
          <Route path="/Entertainment" element={<News key="entertainment" pageSize={pageSize} country={country} category={"entertainment"} apiKey={apiKey}/>} />
          <Route path="/Health" element={<News key="health" pageSize={pageSize} country={country} category={"health"} apiKey={apiKey}/>} />
          <Route path="/Science" element={<News key="science" pageSize={pageSize} country={country} category={"science"} apiKey={apiKey}/>} />
          <Route path="/Sports" element={<News key="sports" pageSize={pageSize} country={country} category={"sports"} apiKey={apiKey}/>} />
          <Route path="/Technology" element={<News key="technology" pageSize={pageSize} country={country} category={"technology"} apiKey={apiKey}/>} />
        </Routes>
        </BrowserRouter>
      </>
    )
  }
}

