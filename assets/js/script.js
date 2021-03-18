
var pageNum = Math.floor(Math.random() * 10); 
var quoteAPI = 'https://quote-garden.herokuapp.com/api/v3/quotes?genre=love&page=' + pageNum
var fontAPI = 'https://www.googleapis.com/webfonts/v1/webfonts?sort=popularity&key=AIzaSyApTTfxzWtDTJAFO8DS8W5vBBqqPCCKmUs'
var quoteDisplayEl = document.querySelector('.quote');
var fontNameDisplay = document.querySelector('.font-name');
var familyDisplayEl = document.querySelector('.font-name');
var fontData  
var quoteData
var currentFontFamily
var currentFontLink
var usedFonts= []


//Fetch information from Google fonts API and stores in variable
fetch(fontAPI)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {

        fontData = data;
        renderNewFont ();
    });

    //function to choose non-repeating random number
    function chooseNumber(){
            
        var num = Math.floor(Math.random() * 100); 

        if (usedFonts.includes(num)) {
            chooseNumber();
        } else { 
            usedFonts.push(num);
            console.log(usedFonts);
            return num;
        }
    }



//function to randomly apply new font to card elements
     function renderNewFont () {
         
        var item = chooseNumber();

        console.log(item);
        
        console.log(fontData);
        // link to download
        console.log(fontData.items[item].files.regular);
        // serif/sans
        console.log(fontData.items[item].category);
        // family
        console.log(fontData.items[item].family);

        currentFontFamily = fontData.items[item].family;
        console.log(currentFontFamily);
        currentFontLink = fontData.items[item].files.regular;

        //append new stylesheet to head
        $("head").append("<link href='https://fonts.googleapis.com/css2?family=" + currentFontFamily + "' rel='stylesheet'>");
        
        //applies font family to card content
        fontNameDisplay.style.fontFamily = currentFontFamily;
        quoteDisplayEl.style.fontFamily = currentFontFamily;

        displayFont(fontData.items[item].family, fontData.items[item].category);


    };

//Fetch information from Quote Garden API and store in variable
fetch(quoteAPI)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        quoteData = data;
        renderNewQuote();
    });

//function to randomly apply new quote to card elements
function renderNewQuote() {

        var item = Math.floor(Math.random() * 10); 
        console.log(item);

        console.log(quoteData);
        // quote
        console.log(quoteData.data[item].quoteText);
        //author
        console.log(quoteData.data[item].quoteAuthor);

        displayQuote(quoteData.data[item].quoteText, quoteData.data[item].quoteAuthor)

        quoteAuthor = quoteData.data[item].quoteAuthor;
        quoteText = quoteData.data[item].quoteText;
        quoteInfo = quoteText + " -" + quoteAuthor;

};

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
    M.toast({ html: '❤️!' })
};
function newFont() {
    M.toast({ html: '💩!' })
};

// Function to go to favorites page
function goToFavoritesPage () {
  window.location.href = "favorite.html"
};

// Function to go to about page
function goToAboutPage () {
    window.location.href = "about.html"
  };

// Function to go to matchmaker page
function goToMatchPage () {
    window.location.href = "draggable.html"
  };

// Function to render a new font and quote combo on each click
  function renderNew () {
    renderNewQuote();
    renderNewFont();
  }

// Function to render a new font and quote combo and save favorite
function renderNewSave () {
    renderNewQuote();
    renderNewFont();
    
    var fontInfo = {
        fontFamily: currentFontFamily,
        fontLink: currentFontLink,
    }

    if (!localStorage.getItem("favorite")){
        var fontArray=[];
        localStorage.setItem("favorite", JSON.stringify(fontArray))
    }

    var storedFavorites = JSON.parse(localStorage.getItem("favorite"));

    storedFavorites.push(fontInfo);

    localStorage.setItem("favorite", JSON.stringify(storedFavorites));

    console.log(storedFavorites);
  }


//Favorite button for user to save information
document.getElementById('btn-up').addEventListener("click", saveFont);
document.getElementById('btn-down').addEventListener("click", newFont);

//Go to favorites page
document.getElementById('favorite-page-btn').addEventListener("click", goToFavoritesPage);

//Go to About page
document.getElementById('about-page-btn').addEventListener("click", goToAboutPage);

//Go to Matchmaker page
document.getElementById('match-page-btn').addEventListener("click", goToMatchPage);

//go to new quote
document.getElementById('btn-down').addEventListener("click", renderNew);

document.getElementById('btn-up').addEventListener("click", renderNewSave);

displayFont();
displayQuote();

// Sidebar Navigation

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });

var collapsibleElem = document.querySelector('.collapsible');
var collapsibleInstance = M.Collapsible.init(collapsibleElem);

// $(document).ready(function(){
//     $('.sidenav').sidenav();
//   });