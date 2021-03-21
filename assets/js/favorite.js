var favoriteCollectionOne = document.querySelector('.first-row');
var favoriteCollectionTwo = document.querySelector('.second-row');
var favoritePagination = document.querySelector('.pagination');
var noFavotires = document.querySelector('#empty')
var savedFavorites = JSON.parse(localStorage.getItem('favorite'));
let current_page = 1;
let numberOfCards = 6;

//Renders "No Saved Favorites" or removes it
function emptyFavorites () {
  if (savedFavorites == null || savedFavorites == 0) {
    noFavotires.classList.remove('hide');
  } else {
    noFavotires.classList.add('hide');
  }
}

//Rendering favorites on fave
function renderFavorites (card, cards_per_page, page) {
  favoriteCollectionOne.innerHTML = "";
  favoriteCollectionTwo.innerHTML = "";
  page--;

  if (savedFavorites !== null) {
  let start = cards_per_page * page;
  let end = start + cards_per_page;
  let paginatedItems = card.slice(start, end);
  
  //Creating the favorite cards
  for (var i = 0; i < paginatedItems.length; i++) {

    if (i === 0 || i === 1 || i === 2) { 

    $("head").append("<link href='https://fonts.googleapis.com/css2?family=" + paginatedItems[i].fontFamily + "' rel='stylesheet'>");

      favoriteCollectionOne.insertAdjacentHTML("beforeend", `
      <div class="row col s12 m6 l4">
        <div class="container fontCardContainerFavorite">
          <div class="card hoverable mainFontCardFavorite">
            <div class="card-content insideCard">
              <span class="card-title font-name insideCard"></span>
              <a class="insideCard download" style="font-family:${paginatedItems[i].fontFamily}" href="${paginatedItems[i].fontLink}"><i class="material-icons">file_download</i> Download Here</a>
              <p class="insideCard" style="font-family:${paginatedItems[i].fontFamily}">${paginatedItems[i].fontFamily}</p>
              <a id='${i}' class="btn-floating favorite-btn tooltipped" data-position="right" data-tooltip="Click to remove"><i class="material-icons">close</i></a>
              </div>
            </div>
          </div>
        </div>
      `)
    } else {

      $("head").append("<link href='https://fonts.googleapis.com/css2?family=" + paginatedItems[i].fontFamily + "' rel='stylesheet'>");

      favoriteCollectionTwo.insertAdjacentHTML("beforeend", `
        <div class="row col s12 m6 l4">
            <div class="container fontCardContainerFavorite">
              <div class="card hoverable mainFontCardFavorite">
                  <div class="card-content insideCard">
                    <span class="card-title font-name insideCard"></span>
                    <a class="insideCard download" style="font-family:${paginatedItems[i].fontFamily}" href="${paginatedItems[i].fontLink}"><i class="material-icons">file_download</i> Download Here</a>
                    <p class="insideCard" style="font-family:${paginatedItems[i].fontFamily}">${paginatedItems[i].fontFamily}</p>
                    <a id='${i}' class="btn-floating favorite-btn tooltipped" data-position="right" data-tooltip="Click to remove"><i class="material-icons">close</i></a>
                  </div>
              </div>
            </div>
        </div>
      `)
    }
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
  }
}

//Tooltip function
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.tooltipped');
  var instances = M.Tooltip.init(elems, []);
});

//Reloads page when user removes a favorite font
function reloadPage () {
  document.location.reload();
}

//Sets up pagination based on length of user's saved fonts
function setUpPagination (cards, wrapper, cards_per_page) {
  wrapper.innerHTML = "";

  if (savedFavorites !== null) {
  let page_count = Math.ceil(cards.length / cards_per_page);
  for (let i = 1; i < page_count + 1; i++) {
    let btn = PaginationButton(i, cards);
    wrapper.appendChild(btn);
  }
}}

//Creates pagination buttons
function PaginationButton (page, cards) {
  let button = document.createElement('li');
  button.innerText = page;

  button.setAttribute('class' , 'waves-effect inactive-page');

  firstPage(page, button);

  button.addEventListener('click', function () {
    let li = document.querySelectorAll('.selector');
  
    for (var i = 0; i < li.length; i++) {
  
      if (page !== li.item(i).innerText) {
        li.item(i).classList.remove('active');
        li.item(i).classList.add('waves-effect');
      }
    }

    current_page = page;
    renderFavorites(cards, numberOfCards, current_page);

    if (this.innerText == page) {
      this.setAttribute('class', 'active selector');
    }
  })
  return button;
}

//Highlightes the first page in pagination
function firstPage (page, button) {
  if (page == 1) {
    button.setAttribute('class', 'active selector');
  }
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
  window.location.href = "matchmaker.html"
};

// Function to go to about page
function goToAboutPage () {
  window.location.href = "about.html"
};

//Go to home page
document.getElementById('home-page-btn').addEventListener("click", goToHomePage);
document.querySelector('.logo').addEventListener('click', goToHomePage);

//Go to About page
document.getElementById('about-page-btn').addEventListener("click", goToAboutPage);

//Go to Matchmaker page
document.getElementById('match-page-btn').addEventListener("click", goToMatchPage);

//Go to favorites page
document.getElementById('favorite-page-btn').addEventListener("click", goToFavoritesPage);

// Sidebar Nav
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});

var collapsibleElem = document.querySelector('.collapsible');
var collapsibleInstance = M.Collapsible.init(collapsibleElem);

renderFavorites(savedFavorites, numberOfCards, current_page);
setUpPagination(savedFavorites, favoritePagination, numberOfCards);
emptyFavorites();