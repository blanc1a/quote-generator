const quoteContainer = document.getElementById("container");
const quoteText = document.getElementById("quote");
const authorName = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

let apiQuotes = []; //let bc the empty array will be filled with content

//show loading
function showLoadingSpinner() {
  //we don't want it to be hidden
  loader.hidden = false;
  quoteContainer.hidden = true;
}

//hide loading
function removeLoadingSpinner() {
  loader.hidden = true;
  quoteContainer.hidden = false;
}

// GET NEW QUOTE
function getNewQuote() {
  showLoadingSpinner();
  //to pick a random quote from the apiQuotes array
  //using [] to make index => to make it dynamically use Math.floor (whole numbers) and Math.random (pick random quote) + * apiQuotes.length (amount of objects in the array: 1643)
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  //check if author field is blank and replace it with "unknown"
  if (!quote.author) {
    //textContent passes a string that is shown in the element
    author.textContent = "Unknown";
  } else {
    author.textContent = quote.author;
  }
  //check quote length to determine styling
  if (quote.text.length > 120) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  //set quote, hide loader
  quoteText.textContent = quote.text;
  removeLoadingSpinner();
}

// GET QUOTES FROM API
async function getQuotesFromAPI() {
  loading();
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

//tweet quote
function tweetQuote() {
  //backticks to create a template string, meaning we have a string that allows us to pass a variable that will be converted into a string
  const twitterURL = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${author.textContent}`;
  //allows us to open a window and passing our URL in a new tab
  window.open(twitterURL, "_blank");
}

//eventListener at the bottom bc we want to declare our function before we call it
newQuoteBtn.addEventListener("click", getNewQuote);
twitterBtn.addEventListener("click", tweetQuote);

getQuotesFromAPI();

//loader that is showing while making the fetch request and is hidden as soon as the quote shows up
