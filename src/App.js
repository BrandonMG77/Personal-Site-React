import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import React, { Component} from 'react';
import  { Breakpoint, BreakpointProvider } from 'react-socks';
import FirstHeader from './FirstHeader';
import SubHeader from './SubHeader';
import Main from './Main';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Contact from './Contact';
import Show from './Show';
import Footer from './Footer';


class App extends React.Component {


  
  render() {

     return <div>

    <Router>
      <Route exact path="/" component={Show}/>

      </Router>
     
      <Router>
      <Route exact path="/contact" component={Contact}/>

      </Router>

      </div>
  

     

  }

 

}




export default App;
