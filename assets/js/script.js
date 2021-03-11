
var quoteAPI = 'https://quote-garden.herokuapp.com/api/v3/quotes'
var fontAPI = 'https://www.googleapis.com/webfonts/v1/webfonts?'
var quoteDisplayEl = document.querySelector('.quote');
var fontNameDisplay = document.querySelector('.font-name');

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
    
    displayFont(data.items[1].family, data.items[1].category);
});

fetch(quoteAPI)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // quote
    console.log(data.data[1].quoteText);
    //author
    console.log(data.data[1].quoteAuthor);

displayQuote(data.data[1].quoteText, data.data[1].quoteAuthor)

});


//displays font name and category to card--- need to add randomizer
function displayFont(fontFamily, fontCategory) {

    fontNameDisplay.textContent = fontFamily + ", " + fontCategory;
    
    }

//displays quote to card--- need to add randomizer
function displayQuote(quoteText, quoteAuthor) {

    quoteDisplayEl.textContent = '"' + quoteText + '"' + " -" + quoteAuthor;
    
    }




