import React from 'react'
import video from './video/Africa.mp4'
import Typical from 'react-typical'
import { useState, Component } from 'react'
import ModalVideo from 'react-modal-video'
import { render } from '@testing-library/react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import './Home.css'
import './video.css'



const Top = () => {
    const [isOpen, setOpen] = useState(false)
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)

    const showbutton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }
        else{
            setButton(true);
        }
    };

  
    return (
      <>
         <nav className='navbar page'>
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
                <div className = "contain">
                    <div className = "navbar-container">
                        <Link to = "/" className = "navbar-logo">
                            AFRI TOURS <i class="fas fa-route"></i>
                        </Link>
                       
                        <div className='menu-icon' onClick= {handClick}>
                            <i className = {click? 'fas fa-times': 'fas fa-bars'}></i>
                        </div>
                        
                    </div>
                    <div className = "ul-item">
                        <ul className ={click ? "nav-menu active" : 'nav-menu'} id = 'nav'>
                            <li className = "nav-item">
                                <Link to ="/home" className = "nav-links" onClick ={closeMobileMenu}>
                                    Home
                                </Link>
                            </li>
                            <li className = "nav-item">
                                <Link to ="/services" className = "nav-links" onClick ={closeMobileMenu}>
                                    Services
                                </Link>
                            </li>
                            <li className = "nav-item">
                                <Link to ="/contact" className = "nav-links" onClick ={closeMobileMenu}>
                                    Contact
                                </Link>
                            </li>
                        </ul>

                        <ModalVideo autoplay channel='youtube' isOpen={isOpen} videoId="fzBVPKU_qX8" onClose={() => setOpen(false)} />
                       <Button buttonStyle = "btn-outline"  onClick={()=> setOpen(true)}><i id = "play" class="fas fa-play"></i></Button>

                      
                    </div>
                </div>
            </nav>
            
     
            
        
        
        {/* <button className="btn-primary button-custom" buttonStyle = "btn-outline" onClick={()=> setOpen(true)}><i id = "play" class="fas fa-play"></i></button> */}
      </> 
    ) 
  }



export default Top;