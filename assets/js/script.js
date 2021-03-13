
var quoteAPI = 'https://quote-garden.herokuapp.com/api/v3/quotes'
var fontAPI = 'https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyApTTfxzWtDTJAFO8DS8W5vBBqqPCCKmUs'
var quoteDisplayEl = document.querySelector('.quote');
var fontNameDisplay = document.querySelector('.font-name');
var familyDisplayEl = document.querySelector('.font-name');



//Fetch information from Google fonts API and applies to card elements
fetch(fontAPI)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        // link to download
        console.log(data.items[5].files.regular);
        // serif/sans
        console.log(data.items[5].category);
        // family
        console.log(data.items[5].family);

        var currentFontFamily = data.items[5].family;
        console.log(currentFontFamily);

        //append new stylesheet to head
        $("head").append("<link href='https://fonts.googleapis.com/css2?family=" + currentFontFamily + "' rel='stylesheet'>");
        
        //applies font family to card content
        fontNameDisplay.style.fontFamily = currentFontFamily;
        quoteDisplayEl.style.fontFamily = currentFontFamily;

        displayFont(data.items[5].family, data.items[5].category);


    });

//Fetch information from Quote Garden API
fetch(quoteAPI)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        // quote
        console.log(data.data[5].quoteText);
        //author
        console.log(data.data[5].quoteAuthor);

        displayQuote(data.data[5].quoteText, data.data[5].quoteAuthor)

        quoteAuthor = data.data[1].quoteAuthor;
        quoteText = data.data[1].quoteText;
        quoteInfo = quoteText + " -" + quoteAuthor;


    });

//displays font name and category to card--- need to add randomizer
function displayFont(fontFamily, fontCategory) {

            fontNameDisplay.textContent = fontFamily + ", " + fontCategory;

        }

//displays quote to card--- need to add randomizer
function displayQuote(quoteText, quoteAuthor) {

            quoteDisplayEl.textContent = '"' + quoteText + '"' + " -" + quoteAuthor;

        }


//Function to save information
function saveFont() {
            M.toast({ html: 'Clicked!' })
        };


// Function to go to favorites page
function goToFavoritesPage () {
  window.location.href = "favorite.html"
};

// Function to go to favorites page
function goToAboutPage () {
    window.location.href = "about.html"
  };
  

//Favorite button for user to save information
document.getElementById('favorite-btn').addEventListener("click", saveFont);

//Go to favorites page
document.getElementById('favorite-page-btn').addEventListener("click", goToFavoritesPage);

//Go to About page
document.getElementById('about-page-btn').addEventListener("click", goToAboutPage);


displayFont();
displayQuote();

