import React, {useState} from "react";
import './gallery.css';
import CloseIcon from '@material-ui/icons/Close'
import { SettingsPhoneTwoTone } from "@material-ui/icons";

function Gallery({imgarr}){

    const [model, setModel] = useState(false);
    const [tempimgSrc, settempImgSrc] = useState("");

    const getImg = (src) =>{
        settempImgSrc(src);
        setModel(true);
    }

     
    return (
        <>
   
            <div className = {model ? "model open" : "model"}>
                <img src={tempimgSrc} />
                <div className="model-wrap" onClick = {() => setModel(false)}>
                    <CloseIcon/>
                </div>
            </div>
            <div className = "gallery">
                         
                {imgarr.map((item) => {
                    return(
                        <>
                            <div  key = {item.id} className = "pics">
                                <div className="gal-wrap"> 
                                    <h1 className= "galTitle">{item.title}, {item.location}</h1> 
                                </div> 
                                <img className="imgMap" src={item.src} style = {{width : '100%', borderRadius : '0%'}}  onClick = {() => getImg(item.src)}/>  
                            </div>
                           
                        </>
                    )
                })}
            </div>
            
           
        </>
    )
   
}


export default Gallery;