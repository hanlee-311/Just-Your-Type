
var quoteAPI = 'https://quote-garden.herokuapp.com/api/v3/quotes'
var fontAPI = 'https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyApTTfxzWtDTJAFO8DS8W5vBBqqPCCKmUs'
var quoteDisplayEl = document.querySelector('.quote');
var fontNameDisplay = document.querySelector('.font-name');
var familyDisplayEl = document.querySelector('.font-name');


//Fetch information from Google fonts API
fetch(fontAPI)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // link to download
    console.log(data.items[2].files.regular);
    // serif/sans
    console.log(data.items[2].category);
    // family
    console.log(data.items[2].family);
    
    var currentFontFamily = data.items[2].family;
   
    fontNameDisplay.style.fontFamily = currentFontFamily;
    
    displayFont(data.items[2].family, data.items[2].category);

});

//Fetch information from Quote Garden API
fetch(quoteAPI)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
      console.log(data);
    // quote
    console.log(data.data[2].quoteText);
    //author
    console.log(data.data[2].quoteAuthor);

displayQuote(data.data[2].quoteText, data.data[2].quoteAuthor)

      quoteAuthor = data.data[1].quoteAuthor;
      quoteText = data.data[1].quoteText;
      quoteInfo = quoteText + " -" + quoteAuthor;



//displays font name and category to card--- need to add randomizer
function displayFont(fontFamily, fontCategory) {

    fontNameDisplay.textContent = fontFamily + ", " + fontCategory;
    
    }

//displays quote to card--- need to add randomizer
function displayQuote(quoteText, quoteAuthor) {

    quoteDisplayEl.textContent = '"' + quoteText + '"' + " -" + quoteAuthor;
    
    }

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

