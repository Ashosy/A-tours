import React, {useState} from 'react'
import { SliderData } from './SliderData'
import {AiFillLeftCircle, AiFillRightCircle} from 'react-icons/ai'
import "../App.css"

const ImageSlider = ({slides}) => {

const [current, setCurrent] = useState(0)
const length = slides.length

const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
   
}
const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
   
}
    return (
        <section className = "slider">
            <AiFillLeftCircle className="circleLeft" onClick = {prevSlide}/>
            <AiFillRightCircle className="circleRight" onClick = {nextSlide}/>

            {SliderData.map((slide, index) => {
                    return (
                        <div className = {index === current ? 'slide active' : 'slide' } key = {index}>
                            {index === current && (
                            <>
                            <div className = "text-contain">
                                <h3 className = "slider-text">{slide.text}</h3><br/>
                                <p className = "slider-description">{slide.description}</p>
                            </div>
                                <img src = {slide.image} alt = 'cool' className = "image"/> 
                            </>) }
                        </div>
                        // <h1>{current}</h1>

                    );
            })}
        </section>
    );
};

export default ImageSlider;