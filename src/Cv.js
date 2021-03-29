import "./styles.css";
import Contact from "./contact/Contact";
import Header from "./header/Header";
import Skills from "./skills/Skills";
import UpButton from "./upButton/Upbutton";
import Portfolio from "./portfolio/Portfolio";
import Description from "./description/Description";
import { CvContainer } from "./styled";
import Navigation from "./navigation/Navigation";
import { useEffect, useState } from "react";
import Info from "./info/Info";

export default function Cv() {
  const [onOff, setOnOff] = useState(false);
  const [profil,setProfil] = useState({});

  useEffect(() => {
    let url = "https://api.github.com/users/Zubiik";
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        setProfil(responseJson);   
      });    
  }, [])


  const onOffCallback = () => {
    console.log("coucou");
    if (onOff === false) {
      setOnOff(true);
    }
    if (onOff === true) {
      setOnOff(false);
    }
  };

  return (
    <div>
      <Info onOffCallback={() => onOffCallback()} />
      <CvContainer>
        <Navigation />
        <Header profil={profil}/>
        <Skills />
        <Description />
        <Portfolio />
        {onOff === true ? <Contact /> : null}
      </CvContainer>
      <UpButton />
    </div>
  );
}
