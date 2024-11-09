// import Navbar from './Navbar';
// import Hourly from './Hourly';
import './contentc.css';

function Content(props) {

    return (
        <div>
            

            {props.weather && (
                <div className='two1'>
                    <div className="weather-widget" id='weather-widget'>
                        <div className="diwali">
                            <div className="city-info">
                                {props.weather.name}
                                <img src="https://img.icons8.com/emoji/48/000000/sun-emoji.png" alt="sun-icon" />
                            </div>
                            <div className="temperature">Temp: {props.weather.main.temp}°C</div>
                            <div>{props.weather.sys.country}</div>
                            <p>{new Date().toLocaleDateString()}</p>

                            <div className="weather-details">
                                <span>Max Temp  <br /> <br />
                                    <i class='fas fa-temperature-high' style={{ color: 'red' }}></i> <i class='fas fa-caret-right' style={{ color: 'red' }}></i> {props.weather.main.temp_max}°C</span>
                                <span>Min Temp  <br /><br />

                                    <i class='fas fa-temperature-low' style={{ color: 'white' }}></i> <i class='fas fa-caret-right' style={{ color: 'white ' }}></i>
                                    {props.weather.main.temp_min}°C</span>
                                <span>Humidity <br /><br />
                                    <i class='fas fa-water' style={{ color: 'aqua' }}></i> <i class='fas fa-caret-right' style={{ color: 'aqua' }}></i>

                                    {props.weather.main.humidity}%</span>
                                <span>Wind <br /><br />
                                    <i class='fas fa-wind' style={{ color: 'gray' }}></i>  <i class='fas fa-caret-right' style={{ color: 'gray' }}></i>

                                    {props.weather.wind.speed} km/h</span>
                            </div>

                            <div className="forecast">
                                {props.forecast.map((day) => (
                                    <div  className="forecast-day">
                                        <div className="day-name">
                                            {new Date(day.dt_txt).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                                        </div>
                                        <img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt={day.weather[0].description} />
                                        <div className="temp-range">{day.main.temp}°C</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* <Hourly name={props.weather.name} /> */}
                </div>

            )}


        </div>
    );
}

export default Content;
