import React, { useState, useEffect } from "react";
import axios from 'axios';

import Header from './components/header';
// import Intro from './components/intro';
// import Info from './components/info';


import "./App.css";




function App() {


  const [nasaData, setNasaData] = useState([]);


  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=gtiSRp3bscHE6KgeeaVNJ3INxXtk8bp3LMdhhMN9').then(res => {
      // console.log(res.data)
      setNasaData(res.data)
    })
  }, [])

  // console.log(nasaData)

  return (
    <div className="App">

      <h3>{nasaData.title}</h3>
      
      <img src={nasaData.url} alt='space stuff'></img>
    




      <Header title={nasaData.title} />
      {/* <Intro /> */}
      {/* <Info /> */}
    </div>
  );
}

export default App;
