const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
const WEATHER_APP_KEY = '9e8dcfa8f1a527447924416611a8d7c9'
app.get('/city/:name',  (req, res) => {
  const cityName = req.params.name
  axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${WEATHER_APP_KEY}`)
    .then(response => {
      console.log(response)
      const data = response.data 
      res.json(data)
      // res.send()
    })
    .catch(err => console.log(err))
  // const res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${WEATHER_APP_KEY}`)
  // console.log('received');
})
app.listen(port, function(){
    console.log(`http://localhost:${port}`);
  });