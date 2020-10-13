import React, {useState} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [city, setCity] = useState('')
  const [info, setInfo] = useState(null)
  const getWeather = (e)=> {
    e.preventDefault();
    axios.get(`http://localhost:5000/city/${city}`)
    .then(res => {
      console.log(res);
      setInfo(res.data)
    })
    .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <form onSubmit = {getWeather}>
        <input value={city} onChange = {(e)=>{
          setCity(e.target.value)
        }} />
        <button type= "submit">Search</button>
      </form>
      {info && info.main && <div>
        <p>La Température est {info && info.main && info.main.temp} </p>
        <p>La Humidité est {info && info.main && info.main.humidity} </p>
      </div>}
    </div>
  );
}

export default App;
