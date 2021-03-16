var favoriteCollection = document.querySelector('.row');
var favoritePagination = document.querySelector('.pagination');
savedFavorites = JSON.parse(localStorage.getItem('favorite'));
let current_page = 1;
let numberOfCards = 6;

//Rendering favorites on fave
function renderFavorites (card, wrapper, cards_per_page, page) {
  // wrapper.innHTML = "";
  // page--;

  // let start = cards_per_page * page;
  // let paginatedItems = card.slice(start, end);

  for (var i = 0; i < savedFavorites.length; i++) {
    $("head").append("<link href='https://fonts.googleapis.com/css2?family=" + savedFavorites[i].fontFamily + "' rel='stylesheet'>");

      favoriteCollection.insertAdjacentHTML("beforeend", `
            <div class="col s4">
                <div class="container fontCardContainerFavorite">
                  <div class="card hoverable mainFontCardFavorite">
                      <div class="card-content insideCard">
                        <span class="card-title font-name insideCard"></span>
                        <a class="insideCard" style="font-family:${savedFavorites[i].fontFamily}" href="${savedFavorites[i].fontLink}">Click Here to Download!</a>
                        <p class="insideCard" style="font-family:${savedFavorites[i].fontFamily}">${savedFavorites[i].fontFamily}</p>
                        <a class="btn-floating favorite-btn"><i class="material-icons">favorite</i></a>
                        </div>
                    </div>
                </div>
            </div>
      `)
  }
};

// function setUpPagination (cards, wrapper, cards_per_page) {
//   wrapper.innHTML = "";

//   let page_count = Math.ceil(cards.length / cards_per_page);
//   for (let i = 1; i < page_count + 1; i++) {
//     let btn = PaginationButton(i, cards);
//     wrapper.appendChild(btn);
//   }
// }

// function PaginationButton (page, cards) {
//   let button = document.createElement('button');
//   button.innerText = page;

//   if (current_page == page) button.classList.add('active');

//   button.addEventListener('click', function () {
//     current_page = page;
//     renderFavorites(cards, favoriteCollection, numberOfCards, current_page);

//     let start = cards_per_page * page;
//     let end = start + cards_per_page;
//     let paginatedItems = cards.slice(start, end);

//     for (let i = 0; i < paginatedItems.length; i++) {
//       favoritePagination.insertAdjacentHTML('beforeend', `
//         <li class="active"><a href="#!">1</a></li>
//       `)
//     }
//   })

//   return button;
// }


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

renderFavorites(savedFavorites, favoriteCollection, numberOfCards, current_page);
// setUpPagination(savedFavorites, favoritePagination, numberOfCards);


// Sidebar Nav
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});

var collapsibleElem = document.querySelector('.collapsible');
var collapsibleInstance = M.Collapsible.init(collapsibleElem);