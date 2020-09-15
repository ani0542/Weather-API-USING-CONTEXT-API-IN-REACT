import React, {useContext} from "react"

import MyContext from "../Context"


function WeatherData() {
    

    const {weather,city} = useContext(MyContext)
    


    return (
        <div>
                 <div className="weather-data">
                               <p className="weather__tagline">Weather forecast for <span className="weather-data__city">{city}</span></p>
                            <div className="weather-data__box">
                                <span className="weather-data__property">
                                <p className="weather-data__title">Temperature</p>
                                <p className="weather-data__value">{weather.temp}</p>
                                </span>
                                <span className="weather-data__property">
                                <p className="weather-data__title">Humidity</p>
                                <p className="weather-data__value">{weather.humidity}</p>
                                </span>
                                <span className="weather-data__property">
                                <p className="weather-data__title">Pressure</p>
                                <p className="weather-data__value">{weather.pressure}</p>
                                </span>
                            </div>
                 </div>
        </div>
    )
}

export default WeatherData

