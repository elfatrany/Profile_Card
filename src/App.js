import './App.css';
import React, { useEffect, useState } from "react";
import PROFILE from './images/img_avatar.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import Display from "./Component/Display.js"


const linkedin = <FontAwesomeIcon icon={faLinkedin} />
const twitter =  <FontAwesomeIcon icon={faTwitter} />
const element = <FontAwesomeIcon icon={faHeart} />


function App() {

const [intro , setIntro] = useState("My Name is Sammy")

const handleName =()=>{
  setIntro("My Name is Sammy")
}

const handleSkills =()=>{
  setIntro("I'm a Frontend Developer")
}

const [count, setCount] = useState(0);

  return (
    <>
    <div className="App">
      <div className="Tile">
        <img src={PROFILE} alt="profile" className="Photo"/>
        <h1>Hi!</h1>
        <Display intro = {intro}/>
        <button onClick ={handleName} className="button">Name</button>
        <button onClick = {handleSkills} className="button">Skills</button>
        <p>{count} <span onClick={() => setCount(count +1)}>{element}</span></p>
        <div className="social">
        <p>{twitter}    {linkedin}</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
