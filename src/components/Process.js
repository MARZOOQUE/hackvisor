import React, { Component } from 'react'
import './Process.css';
import work1 from '../assets/work1.png';
import work2 from '../assets/work2.png';
import work3 from '../assets/work3.png';




class Services extends Component {
    render() {
        return (
            <div className="process">
           
            
                    <svg width="799" height="606" viewBox="0 0 100% 100%" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M587.337 200.902C740.366 153.183 794.023 49.8901 798.481 0H-8L-1.51575 606H355.524C451.978 603.072 507.5 550.743 516.01 479.018C524.521 407.293 396.051 260.551 587.337 200.902Z" fill="url(#paint0_linear)"/>
                    <defs>
                    <linearGradient id="paint0_linear" x1="209.187" y1="658.941" x2="428.998" y2="27.5388" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#7B45E4"/>
                    <stop offset="1" stop-color="#9465F5"/>
                    </linearGradient>
                    </defs>
                    </svg>            

                <h3 className="ph">Our Process</h3>

            <div className="pro" >    
                <div className="box" >
                    <img src={work1} alt={work1} />
                    <p>Daily Standup</p>
                </div>

                <div className="box" >
                    <img src={work2} alt={work2} />
                    <p className="p2">Weekly Syn. Meetintg</p>
                </div>

                <div className="box" >                
                    <img src={work3} alt={work3} />
                    <p className="p3">User Testing</p>
                </div>

            </div>

            </div>
           
          
             
            
        );
    }
}





export default Services