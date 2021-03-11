
var quoteAPI = 'https://quote-garden.herokuapp.com/api/v3/quotes'
var fontAPI = 'https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyApTTfxzWtDTJAFO8DS8W5vBBqqPCCKmUs'
var quoteDisplayEl = document.querySelector('.quote');

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

});

fetch(quoteAPI)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
      console.log(data.data[1].quoteText);
      console.log(data.data[1].quoteAuthor);

});

function displayQuote(quoteText, quoteAuthor) {

quoteDisplayEl.textContent = quoteText + " -" + quoteAuthor

}

displayQuote(data.data[1].quoteText, data.data[1].quoteAuthor)