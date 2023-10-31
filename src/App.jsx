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
    setInputValue('');
    if(!API_KEY) {
      setErrorMessage('Please set your API key!');
      return;
    }
    fetchData();
  }

  const randomCity = () => {
    let random = Math.floor(Math.random() * CitiesList.length)
    console.log('Import', import.meta.env.VITE_API_KEY);
    console.log('API_KEY', API_KEY);
    if(!API_KEY) {
      setErrorMessage('Please set your API key!');
      return;
    }
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

  const switchFarenheit = () => {
    setFahrenheit(!fahrenheit);
  }



  return (
    <div className='app-container'>
      <WeatherDisplay 
        weatherData={weatherData}
        isFahrenheit={fahrenheit}
      />
      <LocationInput 
        handleChange={handleChange} 
        inputValue={inputValue} 
        handleSubmit={handleSubmit}
        randomCity={randomCity}
        switchFarenheit={switchFarenheit}
        fahrenheit={fahrenheit}
      />
      <h2 className='error'>{errorMessage}</h2>
    </div>
  )
}

export default App
