
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
        // link to download
        console.log(data.items[5].files.regular);
        // serif/sans
        console.log(data.items[5].category);
        // family
        console.log(data.items[5].family);

        var currentFontFamily = data.items[5].family;
        console.log(currentFontFamily);

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
        console.log(data.data[9].quoteText);
        //author
        console.log(data.data[9].quoteAuthor);

        displayQuote(data.data[9].quoteText, data.data[9].quoteAuthor)

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

//Favorite button for user to save information
document.getElementById('favorite-btn').addEventListener("click", saveFont);


displayFont();
displayQuote();

