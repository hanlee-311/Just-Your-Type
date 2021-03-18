var favoriteCollection = document.querySelector('.row');
var favoritePagination = document.querySelector('.pagination');
var savedFavorites = JSON.parse(localStorage.getItem('favorite'));
let current_page = 1;
let numberOfCards = 6;

//Rendering favorites on fave
function renderFavorites (card, wrapper, cards_per_page, page) {
  wrapper.innerHTML = "";
  page--;

  let start = cards_per_page * page;
  let end = start + cards_per_page;
  let paginatedItems = card.slice(start, end);

  //Creating the favorite cards
  for (var i = 0; i < paginatedItems.length; i++) {
    $("head").append("<link href='https://fonts.googleapis.com/css2?family=" + paginatedItems[i].fontFamily + "' rel='stylesheet'>");

      favoriteCollection.insertAdjacentHTML("beforeend", `
            <div class="col s4">
                
                  <div class="card hoverable mainFontCardFavorite">
                      <div class="card-content insideCard">
                        <span class="card-title insideCard" style="font-family:${savedFavorites[i].fontFamily}">${savedFavorites[i].fontFamily}</span>
                        <a class="insideCard" style="font-family:${savedFavorites[i].fontFamily}" href="${savedFavorites[i].fontLink}">Click Here to Download!</a>
                        <a id='${i}' class="btn-floating favorite-btn"><i class="material-icons">favorite</i></a>
                        </div>
                    </div>
                </div>
            </div>
      `)
  }

  //Favorite btn listener
    if (savedFavorites !== null) {
      $('.favorite-btn').on('click', function () {
        M.toast({ html: 'Removed from Favorites' })

        savedFavorites.splice(this.id, 1);

        localStorage.setItem("favorite", JSON.stringify(savedFavorites));
        
        setInterval(reloadPage, 1500);
        
      })
    };

    function reloadPage () {
      document.location.reload();
    }
}

function setUpPagination (cards, wrapper, cards_per_page) {
  wrapper.innerHTML = "";

  let page_count = Math.ceil(cards.length / cards_per_page);
  for (let i = 1; i < page_count + 1; i++) {
    let btn = PaginationButton(i, cards);
    wrapper.appendChild(btn);
  }
}

function PaginationButton (page, cards) {
  let button = document.createElement('li');
  button.innerText = page;

  if (current_page == page) button.classList.add('active');

  button.addEventListener('click', function () {
    current_page = page;
    renderFavorites(cards, favoriteCollection, numberOfCards, current_page);

    let start = cards_per_page * page;
    let end = start + cards_per_page;
    let paginatedItems = cards.slice(start, end);
  
  })

  return button;
}


// Function to go to home page
function goToHomePage () {
    window.location.href = "index.html"
};

// Function to go to favorites page
function goToFavoritesPage () {
  window.location.href = "favorite.html"
};

// Function to go to matchmaker page
function goToMatchPage () {
  window.location.href = "draggable.html"
};

// Function to go to about page
function goToAboutPage () {
  window.location.href = "about.html"
};

//Go to home page
document.getElementById('home-page-btn').addEventListener("click", goToHomePage);

//Go to About page
document.getElementById('about-page-btn').addEventListener("click", goToAboutPage);

//Go to Matchmaker page
document.getElementById('match-page-btn').addEventListener("click", goToMatchPage);

//Go to favorites page
document.getElementById('favorite-page-btn').addEventListener("click", goToFavoritesPage);

renderFavorites(savedFavorites, favoriteCollection, numberOfCards, current_page);
setUpPagination(savedFavorites, favoritePagination, numberOfCards);


// Sidebar Nav
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});

var collapsibleElem = document.querySelector('.collapsible');
var collapsibleInstance = M.Collapsible.init(collapsibleElem);