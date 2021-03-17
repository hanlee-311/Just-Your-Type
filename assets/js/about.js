document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });

var collapsibleElem = document.querySelector('.collapsible');
var collapsibleInstance = M.Collapsible.init(collapsibleElem);

// Function to go to home page
function goToHomePage () {
  window.location.href = "index.html"
};

// Function to go to matchmaker page
function goToMatchPage () {
  window.location.href = "draggable.html"
};

// Function to go to favorites page
function goToFavoritesPage () {
window.location.href = "favorite.html"
};

// Function to go to about page
function goToAboutPage () {
window.location.href = "about.html"
};

//Go to home page
document.getElementById('home-page-btn').addEventListener("click", goToHomePage);

//Go to Matchmaker page
document.getElementById('match-page-btn').addEventListener("click", goToMatchPage);

//Go to About page
document.getElementById('about-page-btn').addEventListener("click", goToAboutPage);

//Go to favorites page
document.getElementById('favorite-page-btn').addEventListener("click", goToFavoritesPage);

