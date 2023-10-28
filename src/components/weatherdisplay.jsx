


export const WeatherDisplay = props => {
    const {location, current} = props.weatherData;
    const {isFahrenheit} = props;
    return(
        <div className="weather-display">
            <h2>{location.name}, {location.region} - {location.country}</h2>
            <img src={current.condition.icon} alt='weather icon'/>
            <h4>
                {isFahrenheit ? 
                    `Temp ${current.temp_f}°F -
                    Feels like: ${current.feelslike_f}°F`
                    :
                    `Temp ${current.temp_c}°C -
                    Feels like: ${current.feelslike_c}°C`
                }
            </h4>
            <h5>Humidity: {current.humidity}%</h5>
            <p>Conditions: {current.condition.text}</p>
            <p>Local time: {location.localtime}</p>
        </div>
    )
}