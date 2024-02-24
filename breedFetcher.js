const request = require('request');



const fetchBreedDescription = (breedName, callback) => {
  const url = "https://api.thecatapi.com/v1/breeds/search?q=" + breedName; //assigning url value with breedname to url
  request(url, (error, response, body) => {
    const data = JSON.parse(body); //deserialising body to get an object
    if (data.length === 0) { //if the object is empty
      console.log('Breed not found.');
      return;
    }
    callback(error, data[0].description); //calling callback func with error & desc
  });
};

module.exports = { fetchBreedDescription };