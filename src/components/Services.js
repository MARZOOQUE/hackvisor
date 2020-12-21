import React, { Component } from 'react'
import './Services.css';
import s1 from '../assets/s1.png';
import s2 from '../assets/s2.png';
import s3 from '../assets/s3.png';
import s4 from '../assets/s4.png';



class Services extends Component {
    render() {
        return (
            <div className="services" >
                <h3 className="head">Our Services</h3>
               
             <div className="dsply" >
            <div className="wrap">
                <img src={s1} alt={s1} />
            <div className="d1">
                <h2>Web Designing</h2>
                <p>We have a Creative Web and Graphics Designer <br/>who can design a Website userfriendly
                 with <br/>mobile Responsive.</p>
            </div>
            </div>
            <div className="wrap">
                <img src={s2} alt={s2} />
            <div className="d1">
                <h2>Online & Offline Software</h2>
                <p>HackVisor Provide On-Line Softwarewe <br/>Platform to improve Our Client Business. <br/>always
                 say that we stand on our toes to serve.</p>
            </div>
            </div>
            <div className="wrap">
                <img src={s3} alt={s3} />
            <div className="d1">
                <h2>Mobile App Development</h2>
                <p>Our team of mobile app developers is creative <br/>and knowledgeable to accomplish your <br/>
                individual demands as well as your business <br/>needs.</p>
            </div>
            </div>
            <div className="wrap">
                <img src={s4} alt={s4} />
            <div className="d1">
                <h2>Digital marketing</h2>
                <p>HackVisor is doing Off-Line software for a <br/>Business.We believe technology is a means 
                to <br/>solve human problems.</p>
            </div>
            </div>





            </div>
             
            </div>
        );
    }
}





export default Services