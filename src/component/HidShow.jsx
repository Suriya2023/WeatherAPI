import React from 'react'
import './Hide.css'
function HidShow() {
  return (
    <div >
        
          <div className="weather-container">
        <div className="weather-header">
            <h2>Dubai, United Arab Emirates</h2>
            <p>Updated a few minutes ago</p>
        </div>
        <div className="weather-info">
            <div className="temp">
                <h1>33°C</h1>
                <p>34°F / 25°F</p>
            </div>
            <div className="details">
                <p>Sunny · Wed 30, 11:25 am</p>
                <p>Wind: 17 KMPH</p>
                <p>Humidity: 47%</p>
            </div>
        </div>
        <div className="hourly-forecast">
            <p>12 PM</p>
            <p>3 PM</p>
            <p>6 PM</p>
            <p>9 PM</p>
            <p>12 AM</p>
            <p>3 AM</p>
            <p>6 AM</p>
            <p>9 AM</p>
        </div>
        <div className="daily-forecast">
            <div className="day">
                <p>Wed 30</p>
                <img src="sunny-icon.png" alt="Sunny"/>
                <p>34° / 25°</p>
            </div>
            <div className="day">
                <p>Thu 31</p>
                <img src="sunny-icon.png" alt="Sunny"/>
                <p>33° / 25°</p>
            </div>
        </div>
    </div>
      
    </div>
  )
}

export default HidShow
