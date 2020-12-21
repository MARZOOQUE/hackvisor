import React from 'react';
import {useState} from 'react';
import Slider from "react-slick";
import './Products.css';
import quiky from '../assets/quiky.png';
import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';
import p3 from '../assets/p3.png';
import p4 from '../assets/p4.png';
import p5 from '../assets/p5.png';
import {FaArrowLeft,FaArrowRight} from "react-icons/fa";


const images=[p1,p2,p3,p4,p5];


function Products() {
            const NextArrow = ({onClick}) => {
                return(
                    <div className="arrow next" onClick={onClick}>
                    <FaArrowRight />
                    </div>
                );
            };

            const PrevArrow = ({onClick}) => {
                return(
                    <div className="arrow prev" onClick={onClick}>
                    <FaArrowLeft />
                    </div>
                );
            };
            

            const [imageIndex, setImageIndex ]  = useState(0)

            const settings = {
                infinite:true,
                lazyLoad:true,
                speed:300,
                slidesToShow:3,
                centerMode: true,
                centrePadding:0,
                beforeChange: (current, next) =>setImageIndex(next),
                nextArrow:<NextArrow />,
                prevArrow:<PrevArrow />, 
            };

        return (
            <div className="products" >
                <h3>Our Products</h3>
                <img src={quiky} alt={quiky} width="150" />
                <div className="container">
                <Slider {...settings}>
                {images.map((img, idx)=>(
                    <div className={idx=== imageIndex ? "slide activeSlide" : "slide"}>
                        <img src={img} alt={img}   />
                    </div>
                ))}
                </Slider >
                </div>
            </div>
        );
    }






export default Products