import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './home.css';
import logo from '../assets/logo.png';
import pc from '../assets/pc.png';

class Home extends Component {
render() {
        
        const sections=[
            {
                id:'1',
                name:'Home',
                link: '/'
            },
            {
                id:'2',
                name:'About Us',
                link:'/About'
            },
            {
                id:'3',
                name:'Services',
                link:'/Services'
            },
            {
                id:'4',
                name:'Testimonials',
                link:'/Testimonials'
            },
            {
                id:'5',
                name:'Portfolio',
                link:'Portfolio'
            },
            {
                id:'6',
                name:'Our Team',
                link:'Team'
            },
            {
                id:'7',
                name:'Contact Us',
                link:'Contact'
            }
             ];
 
        const navlinks= sections.map(sections =>{ 
            return(  <li key={sections.id}><Link to={sections.link}>{sections.name}  </Link></li>
             )
        })
     
        return (
           
            <div className="homecont">
      

            <div className="nav">

            <div className="hlogo">
            <h2 className="hv">HackVisor </h2>
            <img src={logo} alt={logo} className="logo" />
            </div>

            <ul className="link">
            {navlinks}
            </ul>
            </div>

            <div className="main">
            <div className="mainsplit">
            <h2>HackVisor</h2>
            <p>On-Line & Off-Line Softwares</p>
            </div>
            <img src={pc} alt={pc} className="pc" />
            </div>

            </div>
          
        )
    }
}

export default Home
