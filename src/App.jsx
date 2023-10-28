import { WeatherDisplay } from './components/weatherdisplay'
import { LocationInput } from './components/locationinput'
import { useState } from 'react'
import axios from 'axios'
import {URL, API_KEY} from './constants'
import InitialData from './data/initialdata'
import CitiesList from './data/cities';
import './App.css'


function App() {
  const [inputValue, setInputValue] = useState('');
  const [weatherData, setWeatherData] = useState(InitialData);
  const [errorMessage, setErrorMessage] = useState('');
  const [fahrenheit, setFahrenheit] = useState(false);
  
  const handleChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
    setInputValue('');
  }

  const randomCity = () => {
    let random = Math.floor(Math.random() * CitiesList.length)
    console.log(CitiesList[random]);
    fetchData(CitiesList[random]);
  }

  const fetchData = (loc) => {
    axios.get(`${URL}key=${API_KEY}&q=${!loc ? inputValue : loc}`)  
      .then(res => {
        setWeatherData(res.data)
        setErrorMessage('');
      })
      .catch(err => {
        setErrorMessage(err.response.data.error.message);
      });
  }



  return (
    <div className='app-container'>
      <label> Fahrenheit?
        <input 
          onChange={() => setFahrenheit(!fahrenheit)}
          value={fahrenheit}
          type='checkbox'
        />
      </label>
      <WeatherDisplay 
        weatherData={weatherData}
        isFahrenheit={fahrenheit}
      />
      <LocationInput 
        handleChange={handleChange} 
        inputValue={inputValue} 
        handleSubmit={handleSubmit}
        randomCity={randomCity}
      />
      <h2 className='error'>{errorMessage}</h2>
    </div>
  )
}

export default App
