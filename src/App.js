import React, { useState, useEffect } from "react";
import axios from 'axios';

import Header from './components/header';
import Info from './components/info';


import "./App.css";




function App() {


  const [nasaData, setNasaData] = useState([]);


  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=gtiSRp3bscHE6KgeeaVNJ3INxXtk8bp3LMdhhMN9').then(res => {
      // console.log(res.data)
      setNasaData(res.data)
    })
  }, [])

  console.log(nasaData)

  const JIC = () => {
    if(nasaData.hdurl){
        return <img className='App-logo' src={nasaData.hdurl} alt='space stuff'/>
    } else {
        return <img className='App-logo' src={nasaData.url} alt='space stuff'/>
    }
  }

  return (
    <div  className='App'>
      
      <Header {...nasaData} />

      <div className='img-link'>
        {JIC()}
      </div>

      <Info {...nasaData} />
    </div>
  );
}

export default App;
