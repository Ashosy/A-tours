import React from 'react'
import video from './video/Africa.mp4'
import './video.css'
import Typical from 'react-typical'

function Video(){
    return (
    <>
        
        <div className = 'video-container'>
            <video src = {video} loop muted autoPlay className = "video"/>
        </div>
        <h1 className = "title">AFRICA</h1>
        <p className = "header">LAND OF {" "}
        <span className = "section">
            <Typical
                loop = {Infinity}
                wrapper = "b"     
                steps = {[
                    "ORIGIN",
                    2000,
                    "NATURE",
                    2000,
                    "HISTORY",
                    2000,
                    "DIVERSITY",
                    2000
                ]}
            />
        </span>
        </p>
        {/* <h1 className = "header1">OF</h1> */}
     
    </>

    
    
    )
} 

export default Video