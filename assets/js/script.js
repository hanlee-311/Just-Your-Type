
var quoteAPI = 'https://quote-garden.herokuapp.com/api/v3/quotes'
var fontAPI = 'https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyApTTfxzWtDTJAFO8DS8W5vBBqqPCCKmUs'
var quoteDisplayEl = document.querySelector('.quote');
var fontNameDisplay = document.querySelector('.font-name');

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
    
    displayFont(data.items[2].family, data.items[2].category);
});

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

});


//displays font name and category to card--- need to add randomizer
function displayFont(fontFamily, fontCategory) {

    fontNameDisplay.textContent = fontFamily + ", " + fontCategory;
    
    }

//displays quote to card--- need to add randomizer
function displayQuote(quoteText, quoteAuthor) {

    quoteDisplayEl.textContent = '"' + quoteText + '"' + " -" + quoteAuthor;
    
    }




