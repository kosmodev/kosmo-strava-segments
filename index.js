const axios = require("axios");
const fs = require('fs');
let rawdata = fs.readFileSync('data.json');

let dataApi = JSON.parse(rawdata);
const token = dataApi.access_token;
axios.get("https://www.strava.com/api/v3/segments/explore?bounds=43.016571,10.521398,43.158596,10.63233&activity_type=running", {
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
