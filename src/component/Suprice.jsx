import React from 'react'
import './Suprice.css'
function Suprice() {
  return (
    <div>
      <div className="container">
      <div className="text-image">
        <div className="text">
      <div className="title">Avoid weather surprises</div>

          <p>AirWeat provides a road trip planner tool with accurate weather forecast information to optimize travel plans.</p>
          <p>A successful road trip requires careful planning to ensure travelers can enjoy a fun and safe journey. A road trip planner with weather is an essential tool to help with this planning. This tool provides up-to-date weather information for any given route.</p>
          <p>It allows travelers to make informed decisions about their travel plans at any given time.</p>
        </div>
        
        <div className="weather-card">
          <div className="city">Surat</div>
          <div className="temp">18°</div>
          <div>Clear</div>
          <div className="info">
            <div>
              <span>Sunrise</span><br/>06:05 AM
            </div>
            <div>
              <span>Sunset</span><br/>04:44 PM
            </div>
            <div>
              <span>Humidity</span><br/>68%
            </div>
            <div>
              <span>Wind Speed</span><br/>15.8Km/h
            </div>
          </div>
          <div className="forecast">
            <div>Sun<br/>21°</div>
            <div>Mon<br/>22°</div>
            <div>Tue<br/>22°</div>
          </div>
        </div>
        
        {/* <img src="https://via.placeholder.com/400" alt="Weather background" className="image"/> */}
      </div>
  </div>
    </div>
  )
}

export default Suprice
