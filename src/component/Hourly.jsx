import React, { useState, useEffect } from 'react'
import './hourly2.css'
function Hourly(props) {



    const [weatherData, setWeatherData] = useState([]);
    // const name  = ("")
    useEffect(() => {
        async function SuraJWeather() {
            try {
                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/forecast?q=${props.weather && (props.weather.name)}&appid=29a0d28667c933c77b0a38334649e81f&units=metric`
                );
                const data = await response.json();
                setWeatherData(data.list.slice(0, 18));
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        }
        SuraJWeather();
    }, []);



    return (
        <div>

            <div className='mainhu'>
                <h1 className='hourly1'>Hourly Wether Data Are Shows !</h1>
                <div className='namehu'>{props.weather && (props.weather.name)}


                    <img src="https://img.icons8.com/emoji/48/000000/sun-emoji.png" alt="sun-icon" /></div>
                <div className='hourly2'>
                    {weatherData.map((forecast) => {
                        let time = new Date(forecast.dt * 1000).toLocaleTimeString([])
                        return (
                            <div className='hou3'>
                              <div className='tempttt'>
                              <strong>{time}</strong>
                              <p>{forecast.main.temp}°C, <br /> {forecast.weather[0].description}</p>
                              </div>
                            </div>
                        );
                    })}
                </div>
            </div>



            <div>
                {/* <h1>{props.name}</h1>
                <div>
                    {
                        weatherData.map((forecast)=>{
                          let time = new Date(forecast.dt * 1000).toLocaleTimeString([])
                          return(
                            <div>
                                <h1>{time}</h1>
                                <p>
                                    {forecast.main.temp},
                                    {forecast.weather[0].description}
                                </p>
                            </div>
                          )
                      
                        })
                    }
                </div> */}
            </div>

        </div>
    )
}

export default Hourly
