import './App.css';
import React, { useState } from 'react';

import Navbar from './component/Navbar';
import Content from './component/Content';
import Hourly from './component/Hourly';
// import HidShow from './component/HidShow';

import FeedBack from './component/FeedBack';
import Footer from './component/footer';
import Suprice from './component/Suprice';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {


  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);

  // Fetch current weather data
  const fetchWeather = async () => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=29a0d28667c933c77b0a38334649e81f&units=metric`);
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      console.log("No data found", error);
    }
  };

  // Fetch 5-day forecast data
  const fetchForecast = async () => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=29a0d28667c933c77b0a38334649e81f&units=metric`);
      const data = await response.json();


      const Forecast = data.list.filter(item => item.dt_txt.includes("12:00:00"));
      setForecast(Forecast.slice(0, 5));
    } catch (error) {
      console.log("No forecast data found", error);
    }
  };

  // Handle form submission
  const handle = (e) => {
    e.preventDefault();
    fetchWeather();
    fetchForecast();
  };


  return (
    <div className="App">
      <Router>
        <Navbar setCity={setCity} handle={handle} />


        <Routes>
          <Route path='/Content' element={<Content weather={weather} forecast={forecast} />}></Route>
          <Route path='/Hourly' element={ <Hourly weather={weather} />}></Route>
          {/* <Route path='/HidShow' element={<HidShow id="blockk" />}></Route> */}
          <Route path='/Suprice' element={<Suprice />}></Route>
          {/* <Route path='/FeedBack' element={}></Route> */}
          {/* <Route path='/' element={}></Route> */}
        </Routes>
        <FeedBack />
        <Footer />
      </Router>

    </div>
  );
}

export default App;
