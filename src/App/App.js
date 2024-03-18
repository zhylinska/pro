import React, {useState} from "react"
import './App.css';
import Header from "../header/header";
import Showcase from "../showcase/showcase";
import Slider from "../slider/slider"
import Footer from "../footer/footer";
import JoinButton from "../join/joinButton";
import Contacts from "../contacts/contacts";


export default function App() {


  const [join, setJoin] = useState(false)
  const [showText, setShowText] = useState(false)

  function Show() {
    setShowText((prev)=>!prev)
  }

  return (
      <div className="App"
      >
        <Header
        showText={showText}
        Show={Show}
        />
        <Showcase
        showText={showText}
        Show={Show}
        />
        <Slider/>
        <Contacts />
        <Footer/>
        <JoinButton
            join={join}
            setJoin={setJoin}
        />
      </div>
  );
}

