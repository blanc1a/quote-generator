let apiQuotes = []; //let bc the empty array will be filled with content

// GET NEW QUOTE
function getNewQuote() {
  //to pick a random quote from the apiQuotes array
  //using [] to make index => to make it dynamically use Math.floor (whole numbers) and Math.random (pick random quote) + * apiQuotes.length (amount of objects in the array: 1643)
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  console.log(quote);
}

// GET QUOTES FROM API
async function getQuotesFromAPI() {
  //use an asynchronous function bc it can run at anytime without stopping the brwoser from completing the loading of a page
  const apiURL = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
  //try catch allows us to attempt to complete a fetch request but if it doesn't work we can catch the error information and do smt with it
  try {
    const response = await fetch(apiURL);
    //the constant will not be populated until it has some data fetched from the api (bc of the await)
    apiQuotes = await response.json();
    //we are getting the json from the api as a response and we are turning this response into a json object from a webserver and we pass that into a global variable called apiQuotes
    getNewQuote();
  } catch (error) {
    //catch error here
  }
}

getQuotesFromAPI();
