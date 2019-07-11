import React, { useState, useEffect } from "react";
import axios from 'axios';

import Header from './components/header'


import "./App.css";









function App() {


  const [nasaData, setNasaData] = useState([]);


  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=gtiSRp3bscHE6KgeeaVNJ3INxXtk8bp3LMdhhMN9').then(res => {
      console.log(res.data)
      setNasaData(res.data)
    })
  }, [])


  return (
    <div className="App">

      <img src={nasaData.url} alt='space stuff'></img>
    
      <Header />


    </div>
  );
}

export default App;
