import React, { Component } from 'react'
import './Client.css';
import Ellipse from '../assets/Ellipse.png';
import g1 from '../assets/g1.png';
import g2 from '../assets/g2.png';
import g3 from '../assets/g3.png';
import g4 from '../assets/g4.png';

class Client extends Component {
    render() {
        return (
            <div className="client" >
            
           
            <div className="border">
                <svg width="798" height="537" viewBox="0 0 798 537" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M210.494 358.973C57.9364 401.258 4.44414 492.79 -9.3892e-05 537L804 537L797.536 0.000139446L441.594 7.72108e-05C345.437 2.59426 290.086 48.9656 281.602 112.524C273.118 176.082 401.192 306.116 210.494 358.973Z" fill="url(#paint0_linear)"/>
                <defs>
                <linearGradient id="paint0_linear" x1="587.481" y1="-46.9126" x2="410.324" y2="525.587" gradientUnits="userSpaceOnUse">
                <stop stop-color="#7B45E4"/>
                <stop offset="1" stop-color="#9465F5"/>
                </linearGradient>
                </defs>
                </svg>
            </div>
               <h2 className="clihead">Our Client’s Says</h2>
            <div className="mainwrap">
            <div className="namebox">
            <img src={Ellipse} alt={Ellipse} />
            <p>Lorem ipsum dolor sit amet, <br/>consectetur adipiscing elit. In metus <br/>habitant et consequat 
            sed augue <br/>semper imperdiet. Consequat velit <br/>sapien id et.</p>
            <hr/>
            <p className="name">Nusaif Kadavil</p>
            <p>Ceo of ZEROARK</p>
            </div>

            <div className="namebox">
            <img src={Ellipse} alt={Ellipse} />
            <p>Lorem ipsum dolor sit amet, <br/>consectetur adipiscing elit. In metus <br/>habitant et consequat 
            sed augue <br/>semper imperdiet. Consequat velit <br/>sapien id et.</p>
            <hr/>
            <p className="name">Nusaif Kadavil</p>
            <p>Ceo of ZEROARK</p>
            </div>

            <div className="namebox">
            <img src={Ellipse} alt={Ellipse} />
            <p>Lorem ipsum dolor sit amet, <br/>consectetur adipiscing elit. In metus <br/>habitant et consequat 
            sed augue <br/>semper imperdiet. Consequat velit <br/>sapien id et.</p>
            <hr/>
            <p className="name">Nusaif Kadavil</p>
            <p>Ceo of ZEROARK</p>
            </div>

            </div>

            <div className="gcontainer">
            <img src={g1} className="i1" alt={g1} />
            <img src={g2} className="i2" alt={g2} />
            <img src={g3} className="i3" alt={g3} />
            <img src={g4} className="i4" alt={g4} />

            </div>
            </div>

 
          
        );
    }
}





export default Client