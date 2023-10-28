import { WeatherDisplay } from './components/weatherdisplay'
import { LocationInput } from './components/locationinput'
import './App.css'

function App() {
  

  return (
    <div className='app-container'>
      <WeatherDisplay />
      <LocationInput />
    </div>
  )
}

export default App
