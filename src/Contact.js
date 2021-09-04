import React, {Component} from "react";
import FirstHeader from './FirstHeader';
import SubHeader from './SubHeader';
import Footer from './Footer';

export default class Contact extends React.Component {

    render () {

        return <div name="me" className="contact">
          
          <FirstHeader/>
          <div>

            <div name= "sub"className="sub">
            <h3>Contact</h3>
            <p>You can contact me at gamboajavier2021@gmail.com</p>

        </div>
           
          </div>
          <Footer/>
        </div>

  
        

    }

}