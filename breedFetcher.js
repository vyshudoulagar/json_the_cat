const request = require('request');
const breedName = process.argv.slice(2);

const url = "https://api.thecatapi.com/v1/breeds/search?q=" + breedName; //assigning url value with breedname to url
request(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error.message); //if there is an error, prints an error message
  }
  const data = JSON.parse(body); //deserialising body to get an object
  if (data.length === 0) { //if the object is empty
    console.log('Breed not found.');
    return;
  }
  console.log(data[0].description); //prints description key value of first element of data array
});