import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import Products from './components/Products';
import Process from './components/Process';
import About from './components/About';
import Client from './components/Client';
import Contact from './components/Contact';


class App extends Component {
  render(){
  return (
    <BrowserRouter> 

      <div>
        <Home />
        <Services />
        <Process />
        <Products />
        <Client />
        <About />
        <Contact /> 
      {/*  
        
        
    */}
      </div>
    </BrowserRouter>
  );
}
}

export default App;

