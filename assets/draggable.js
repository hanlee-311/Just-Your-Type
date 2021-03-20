var draggableFonts = document.querySelector(".draggable-font");
var savedFavorites = JSON.parse(localStorage.getItem('favorite'));


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
document.querySelector('.logo').addEventListener('click', goToHomePage);

//Go to Matchmaker page
document.getElementById('match-page-btn').addEventListener("click", goToMatchPage);

//Go to About page
document.getElementById('about-page-btn').addEventListener("click", goToAboutPage);

//Go to favorites page
document.getElementById('favorite-page-btn').addEventListener("click", goToFavoritesPage);


//function to make content draggable
$( function() {
  $( ".draggable" ).draggable();
    });
  

//loop to insert favorite fonts into draggable div
for (var i = 0; i < savedFavorites.length; i++) {
    $("head").append("<link href='https://fonts.googleapis.com/css2?family=" + savedFavorites[i].fontFamily + "' rel='stylesheet'>");

      draggableFonts.insertAdjacentHTML("beforeend", `
      <div class="draggable" class="ui-widget-content" id ="contenteditable">
        <div class ="column" class="insideCard" class="resizable" class="ui-widget-header" class="increase" class= "decrease" style="font-family:${savedFavorites[i].fontFamily}">${savedFavorites[i].fontFamily}</p>
      </div>
        `);      
  }

  //functions to reset to original position
  $(".draggable").data({
    'originalLeft': $(".draggable").css('left'),
    'originalTop': $(".draggable").css('top')
});

$(".reset").click(function() {
    $(".draggable").css({
        'left': $(".draggable").data('originalLeft'),
        'top': $(".draggable").data('originalTop')
    });
});

//function to capture matched pair-- not functioning properly yet
function takeShot() {
  console.log('taking screenshot');
  let div = 
      document.getElementById('capture'); 
  console.log('capture element: ', div);
  html2canvas(div).then( 
      function (canvas) { 
        console.log('canvas:', canvas);
          document 
          .getElementById('output') 
          .appendChild(canvas); 
      }) 
} 
//resizing fonts

  // $(document).ready(function() {
  //   var resize = new Array('p', '.resizable');
  //   resize = resize.join(',');

  //   //resets the font size when "reset" is clicked
  //   var resetFont = $(resize).css('font-size');
  //   $(".reset").click(function() {
  //     $(resize).css('font-size', resetFont);
  //   });


  // //function to increase font size on dbl click
  // $(".insideCard").dblclick(function() {
  //     console.log("click");
  //   var originalFontSize = $(resize).css('font-size');
  //   var originalFontNumber = parseFloat(originalFontSize, 10);
  //   var newFontSize = originalFontNumber * 1.2;
  //   $(resize).css('font-size', newFontSize);
  //   return false;
  // });

//   //function to decrease font siz on single click
//   $(".insideCard").click(function() {
//     console.log("click");

//     var originalFontSize = $(resize).css('font-size');
//     var originalFontNumber = parseFloat(originalFontSize, 10);
//     var newFontSize = originalFontNumber * 0.8;
//     $(resize).css('font-size', newFontSize);
//     return false;
//   });

// Side Navigation Bar
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, {});
});


  //function to increase font size on dbl click-- not functioning properly yet
  $(".insideCard").dblclick(function() {
      console.log("click");
    var originalFontSize = $(resize).css('font-size');
    var originalFontNumber = parseFloat(originalFontSize, 10);
    var newFontSize = originalFontNumber * 1.2;
    $(resize).css('font-size', newFontSize);
    return false;
  });
