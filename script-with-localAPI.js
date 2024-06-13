const quoteContainer = document.getElementById("container");
const quoteText = document.getElementById("quote");
const authorName = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

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

function changeBackground() {
  //change background according to movie
  if (author.textContent.includes("Harry Potter")) {
    document.body.style.background = `url("./harrypotter.jpg")`;
  } else if (
    author.textContent.includes("The Lord of the Rings") ||
    author.textContent.includes("Hobbit")
  ) {
    document.body.style.background = `url("./lordoftherings.jpg")`;
  } else if (author.textContent.includes("Titanic")) {
    document.body.style.background = `url("./titanic.jpg")`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
  } else if (author.textContent.includes("Hunger Games")) {
    document.body.style.background = `url("./hungergames.jpg")`;
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  } else if (author.textContent.includes("Avatar")) {
    document.body.style.background = `url("./avatar.jpg")`;
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  } else if (author.textContent.includes("Nemo")) {
    document.body.style.background = `url("./findingnemo.jpg")`;
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  } else if (author.textContent.includes("Dirty Dancing")) {
    document.body.style.background = `url("./dirtydancing.jpg")`;
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  } else if (author.textContent.includes("Guardian")) {
    document.body.style.background = `url("./guardiansofthegalaxy.jpg")`;
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  } else if (author.textContent.includes("Batman")) {
    document.body.style.background = `url("./Batman.jpg")`;
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  } else if (author.textContent.includes("Iron")) {
    document.body.style.background = `url("./ironman.jpg")`;
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  } else if (author.textContent.includes("Bond")) {
    document.body.style.background = `url("./jamesbond.jpg")`;
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  } else if (author.textContent.includes("Jaws")) {
    document.body.style.background = `url("./jaws.jpg")`;
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  } else if (author.textContent.includes("Sherlock")) {
    document.body.style.background = `url("./sherlock.jpg")`;
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  } else if (author.textContent.includes("Spider")) {
    document.body.style.background = `url("./spiderman.jpg")`;
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  } else if (author.textContent.includes("Star Wars")) {
    document.body.style.background = `url("./starwars.jpg")`;
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  } else if (author.textContent.includes("Terminator")) {
    document.body.style.background = `url("./terminator.jpg")`;
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  } else if (author.textContent.includes("Dark Knight")) {
    document.body.style.background = `url("./thedarkknight.jpg")`;
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  } else if (author.textContent.includes("Toy Story")) {
    document.body.style.background = `url("./toystory.jpg")`;
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  }
}

// GET NEW QUOTE
function getNewQuote() {
  showLoadingSpinner();
  //to pick a random quote from the apiQuotes array
  //using [] to make index => to make it dynamically use Math.floor (whole numbers) and Math.random (pick random quote) + * apiQuotes.length (amount of objects in the array: 1643)
  const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
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
  changeBackground();
  removeLoadingSpinner();
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

getNewQuote();

//loader that is showing while making the fetch request and is hidden as soon as the quote shows up
