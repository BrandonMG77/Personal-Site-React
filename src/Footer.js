import React, {Component} from "react";
import FirstHeader from './FirstHeader';
import SubHeader from './SubHeader';
import './App.css';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

export default class Footer extends React.Component {

    render () {

        return  <div>         
            
        <footer className="footer">
            <div className="footer-name">© Javier Muñoz</div>
            <div className="icons">
                <a href="https://www.linkedin.com/in/javier-munoz-ab007a213/"><FaLinkedin/></a>
            <a href="https://github.com/BrandonMG77"><FaGithub /></a>
            
            </div>
        <a class="mail "href="mailto:gamboajavier2021@gmail.com">gamboajavier2021@gmail.com</a>
        </footer>

      </div>

  
        

    }

}