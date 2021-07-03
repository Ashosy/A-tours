import image from './components/images/Morocco.jpg'
import image2 from './components/images/Algeria.jpg'
import image3 from './components/images/Thebes.jpg'
import image4 from './components/images/Ethiopia.jpg'
import image5 from './components/images/Libya.jpg'
import image6 from './components/images/Niger.jpg'
import image7 from './components/images/South Africa.jpg'
import image8 from './components/images/Sudan.jpg'
import image9 from './components/images/Tunisia.jpg'
import image10 from './components/images/Niger.jpg'
import image11 from './components/images/Niger.jpg'
import image12 from './components/images/Niger.jpg'
const getData = () => {
    let data = [
      {
        id : 1,
        src: image,
        height: 500,
        location: "Morocco",
        title : "Volubilbis"
      }, {
        id : 2,
        src: image2,
        height: 400,
        location: "Algeria",
        title : "Thebes"
      }, {
        id : 3,
        src: image3,
        height: 700,
        location: "Egypt",
        title : "Thebes"
      }, {
        id : 4,
        src: image4,
        height: 250,
        location: "Ethiopia",
        title : "Lalibela"
      }, {
        id : 5,
        src: image5,
        height: 800,
        location: "Libya",
        title : "Thebes"
      }, {
        id : 6,
        src: image6,
        height: 500,
        location: "Niger",
        title : "Thebes"
      }, {
        id : 7,
        src: image7,
        height: 400,
        location: "South Africa",
        title : "Man"
      }, {
        id : 8,
        src: image8,
        height: 700,
        location: "Sudan",
        title : "Thebes"
      }, {
        id : 9,
        src: image9,
        height: 250,
        location: "Tunisia",
        title : "Thebes"
      }
      , {
        id : 10,
        src: image10,
        height: 250,
        location: "Niger",
        title : "Thebes"
      }
      
    ]
    return data;
  }
  
  export default getData;