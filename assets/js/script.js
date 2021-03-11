
var quoteAPI = 'https://quote-garden.herokuapp.com/api/v3/quotes'
var fontAPI = 'https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyApTTfxzWtDTJAFO8DS8W5vBBqqPCCKmUs'
var quoteDisplayEl = document.querySelector('.quote');
var familyDisplayEl = document.querySelector('.font-name');


//Fetch information from Google fonts API
fetch(fontAPI)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // link to download
    console.log(data.items[1].files.regular);
    // serif/sans
    console.log(data.items[1].category);
    // family
    console.log(data.items[1].family);

    fontFamily = data.items[1].family;

    displayFont(fontFamily);

});

//Fetch information from Quote Garden API
fetch(quoteAPI)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
      console.log(data.data[1].quoteText);
      console.log(data.data[1].quoteAuthor);

      quoteAuthor = data.data[1].quoteAuthor;
      quoteText = data.data[1].quoteText;
      quoteInfo = quoteText + " -" + quoteAuthor;

      displayQuote(quoteInfo);
      

});

//Functions to display API information on card
function displayFont (fontFamily) {
    familyDisplayEl.textContent = fontFamily;
}

function displayQuote(quoteInfo) {
    quoteDisplayEl.textContent = quoteInfo;
}

//Function to save information
function saveFont() {
    M.toast({html: 'Clicked!'})
};

//Favorite button for user to save information
document.getElementById('favorite-btn').addEventListener("click", saveFont);

displayQuote();      