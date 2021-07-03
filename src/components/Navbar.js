import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';



function Navbar() {
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

    window.addEventListener('resize' , showbutton)
    
    return (
        <>

            <nav className='navbar'>
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

                        {button && <Button buttonStyle = "btn-outline"><i id = "play" class="fas fa-play"></i></Button>}
                    </div>
                </div>
            </nav>
            
        </>
    )
}

export default Navbar
