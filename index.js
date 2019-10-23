const axios = require("axios");
const geoCoordinates = require("./getCoordinates");
const fs = require('fs');
let rawdata = fs.readFileSync('data.json');
let dataApi = JSON.parse(rawdata);
const token = dataApi.access_token;
const conf = JSON.parse(fs.readFileSync('config.json'));

(geoCoordinates.geoByCityCoordinates('Livorno Italy').then(function(response){
    const bounds = `${response.data[0].boundingbox[0]},${response.data[0].boundingbox[2]},${response.data[0].boundingbox[1]}`;
    const activity_type = 'running';
    axios.get(`${conf.domain}${conf.api_version}${conf.end_point.segments}?bounds=${bounds},${response.data[0].boundingbox[3]}&activity_type=${activity_type}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(function(response){
          console.log(response.data);
      })
      .catch(function(error){
          console.log(error);
      });

}));
