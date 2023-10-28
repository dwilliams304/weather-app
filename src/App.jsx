import { WeatherDisplay } from './components/weatherdisplay'
import { LocationInput } from './components/locationinput'
import { useState } from 'react'
import axios from 'axios'
import {URL, API_KEY} from './constants'
import './App.css'

const initialInputValues = { /* eslint-disable-line */
  location: '',

}

function App() {
  const [inputValue, setInputValue] = useState('');
  const [weatherData, setWeatherData] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  
  const handleChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
    setInputValue('');
  }

  const fetchData = () => {
    axios.get(`${URL}key=${API_KEY}&q=${inputValue}`)  
      .then(res => setWeatherData(res.data))
      .catch(err => {
        setErrorMessage(err.response.data.error.message);
        console.log(err);
      });
  }



  return (
    <div className='app-container'>
      <WeatherDisplay weatherData={weatherData}/>
      <LocationInput 
        handleChange={handleChange} 
        inputValue={inputValue} 
        handleSubmit={handleSubmit}
      />
      <h2 className='error'>{errorMessage}</h2>
    </div>
  )
}

export default App
