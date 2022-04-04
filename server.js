const express = require('express');
const app = express();
const validator = require('./validator')
const  bodyParser = require("body-parser");
const { json } = require('express/lib/response');
require('dotenv').config();

const key = process.env.GOOGLE_API_KEY

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send("Welcome to address search");
});

app.post('/searchAddress', (req, res) => {
    validator(req, res)

    var address = req.body.street +' '+ req.body.city +' '+ req.body.state + ' '+ req.body.country
    
    var desiredOutput = {}

    // const geoLocation =
    async function geoLocation() {
        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${key}`)
        const elevation = await  fetch(`https://maps.googleapis.com/maps/api/elevation/json?locations=${response.results[0].geometry.location.lat}%2C-${response.results[0].geometry.location.lng}&key=${key}`)
        const timezone = await fetch(`https://maps.googleapis.com/maps/api/timezone/json?location=${elevation.results[0].location.lat}%2C-${elevation.results[0].location.lng}&timestamp=${Date.now()}&key=${key}`)
        
        desiredOutput['longitude'] = elevation.results[0].location.lng
        desiredOutput['latitude'] = elevation.results[0].location.lat
        desiredOutput['elevation'] = elevation
        desiredOutput['timezone'] = timezone
        return desiredOutput
        
        
    }

    

    geoLocation()
    .then(data => {
        res.status(200).send(data)
    })
    .catch (err => {
        return res.status(500).send(err) 
    })
    
    
});

// Listen to the specified port in env, or 3000 otherwise
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});

module.exports = app;