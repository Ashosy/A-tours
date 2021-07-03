import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Video from './components/video'
import Home from './components/Home';
import ImageSlider from "./components/ImageSlider"
import {SliderData} from "./components/SliderData"
import Gallery from "./components/Gallery"
import getData from './data'
import { Fragment, useState } from 'react';
import History from "./components/History"
import Top from "./components/Top"
import { HistryData } from './components/HistryData';
import FlashCardList from "./components/FlashCardList"
import '../node_modules/react-modal-video/scss/modal-video.scss';
import "./components/card.css";
import Map from './components/Map';

function App() {
  let images = getData();
  
  const[flashcards, setFlashCards] = useState(SAMPLE_FLASHCARDS)
  return (
    <Fragment>
      <Router>
        <Switch>
        <Top/>
          <Route path = '/' exact/>
        </Switch>
       </Router>
       <Home/>
       <Map/>
       <ImageSlider slides = {SliderData}/> <br/> <br/> <br/>
       <Gallery imgarr = {images} />
        <History slides = {HistryData} />
    {/* <div>
        <FlashCardList flashcards = {flashcards}/>
    </div> */}

   
    </Fragment>
  );
}

const SAMPLE_FLASHCARDS = [
{
  id : 1,
  question : "Question 1",
  answer : "4",
  options: [
    '2',
    '3',
    '4'
  ]

},
{
  id : 2,
  question : "Question 2",
  answer : "9",
  options: [
    '2',
    '3',
    '4'
  ]

}
,
{
  id : 2,
  question : "Question 2",
  answer : "9",
  options: [
    '2',
    '3',
    '4'
  ]

}
,
{
  id : 2,
  question : "Question 2",
  answer : "9",
  options: [
    '2',
    '3',
    '4'
  ]

}
,
{
  id : 2,
  question : "Question 2",
  answer : "9",
  options: [
    '2',
    '3',
    '4'
  ]

}
,
{
  id : 2,
  question : "Question 2",
  answer : "9",
  options: [
    '2',
    '3',
    '4'
  ]

}
,
{
  id : 2,
  question : "Question 2",
  answer : "9",
  options: [
    '2',
    '3',
    '4'
  ]

}
,
{
  id : 2,
  question : "Question 2",
  answer : "9",
  options: [
    '2',
    '3',
    '4'
  ]

}

]


export default App;