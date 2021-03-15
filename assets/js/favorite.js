var favoriteCollection = document.getElementById('favorite-wrapper');

//Rendering favorites on fave
function renderFavorites () {
  savedFavorites = JSON.parse(localStorage.getItem('favorite'));

  for (var i = 0; i < savedFavorites.length; i++) {

      favoriteCollection.insertAdjacentHTML("beforebegin", `
      <div class="row">
            <div class="col s4">
                <div class="container fontCardContainerFavorite">
                  <div class="card hoverable mainFontCardFavorite">
                      <div class="card-content insideCard">
                        <span class="card-title font-name insideCard"></span>
                        <p class="insideCard">${savedFavorites[i].fontFamily}</p>
                        <a class="btn-floating favorite-btn"><i class="material-icons">favorite</i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      `)
  }
};



// Function to go to home page
function goToHomePage () {
    window.location.href = "index.html"
};

// Function to go to favorites page
function goToFavoritesPage () {
  window.location.href = "favorite.html"
};

// Function to go to about page
function goToAboutPage () {
  window.location.href = "about.html"
};

//Favorite btn listener
$('.favorite-btn').on('click', function () {
  M.toast({ html: '❤️!' })
  
});

//Go to home page
document.getElementById('home-page-btn').addEventListener("click", goToHomePage);

//Go to About page
document.getElementById('about-page-btn').addEventListener("click", goToAboutPage);

//Go to favorites page
document.getElementById('favorite-page-btn').addEventListener("click", goToFavoritesPage);

renderFavorites();

// Sidebar Nav
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});

var collapsibleElem = document.querySelector('.collapsible');
var collapsibleInstance = M.Collapsible.init(collapsibleElem);