import React, { Component } from 'react'
import './About.css';
import pic from '../assets/about.png';




class About extends Component {
    render() {
        return (
            <div className="about" >
                <h2 className="abhead" >About Us</h2>

            <div className="para">
            <div className="para1">
               <p>HackVisor has providing varities of Web Application according to the user <br/>requirments.
             outsourced development services since 2k19. We employ a <br/>skilled team of developers in India, 
             who are totally focused on delivering <br/>high quality software solutions which enable
            our customers to achieve <br/>their critical IT objectives.</p>

            <p>We are uniquely positioned to provide what our customers need – complex <br/>software 
            solutions to answer their requirements, delivered reliably on time, <br/>with excellent
            value for money. As well as our own staff, we also have access <br/>to a pool of software
            developers from our approved partners here in India.
                </p>
                 <hr/>
            </div>
            <img src={pic} alt={pic} />
            </div>
               
            </div>

 
          
        );
    }
}





export default About