import React, {useState} from 'react'
import {IoTriangleSharp} from 'react-icons/io5'
import {IoIosArrowDropdownCircle} from 'react-icons/io'
import {IoIosArrowDropupCircle} from 'react-icons/io'
import { HistryData } from "./HistryData"
import "./history.css"
import "../App.css"

const History = ({slides}) => {

const [current, setCurrent] = useState(0)

// const length = slides.length;

const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
    
}
const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
    
}
   
    return (
        <>
            <div className = "containerHistory">
                <div className= "section-enclose">
                    <section className = "circle-section">
                        <div className = "circle">
                        </div>
                    </section>
                    <section className = "text-section">
                        <div className = "title-contain">
                            <h1 className="title-date">1920</h1>
                            <p className = "title-text">Description of what happened that year and what could possibly happen. Description of what happened that year and what could possibly happen. Description of what happened that year and what could possibly happen.</p>
                        </div>
                    </section>
                    <section className="btn-section">
                            <IoIosArrowDropupCircle className="btn-up" onClick =  {nextSlide}/>
                            <IoIosArrowDropdownCircle className="btn-down" onClick = {prevSlide}/>
                    </section>

                </div>
            </div>


            <div className = "containerHistoryImage">
            </div>
        </>

        );

}

export default History
