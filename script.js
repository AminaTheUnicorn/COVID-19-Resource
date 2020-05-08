
// API for news API
var newsAPI = "4d2b9f062a9846ddb0e115c2ff221c20"
var newsAPIDomains = "dallasnews.com,wfaa.com,fox4news.com,nbcdfw.com,star-telegram.com,metroplexdaily.com,dallasobserver.com,texasmonthly.com,wfaa.com,texastribune.org,dallascityhall.com,dfw.cbslocal.com,texasstandard.org,thetexan.news,kera.org,dshs.state.tx.us";
var newsUrl = 'https://newsapi.org/v2/everything?sortBy=publishedAt&pageSize=5&qInTitle=+covid-19 OR(+coronavirus OR +corona-virus OR +disease OR +pandemic)&domains=' + newsAPIDomains + '&apiKey=' + newsAPI;
// Function for generating the news cards from articles
fetch(newsUrl)
  .then(response => response.json())
  .then(function (response) {
    console.log(response);
    for (let i = 0; i < response.articles.length; i++) {
      var newArticleDiv = $("<article>").attr("class", "card");
      var articleHeader = $("<h4>").attr("class", "card-header").text(response.articles[i].title);
      newArticleDiv.append(articleHeader);
      var articleBody = $("<div>").attr("class", "card-body");
      newArticleDiv.append(articleBody);
      var articleDescript = $("<h6>").text(response.articles[i].description);
      articleBody.append(articleDescript);
      var info = $("<p>").text("Sourced From: " + response.articles[i].source.name + " - Written By: " + response.articles[i].author)
      articleBody.append(info);
      var button = $("<a>").attr("class", "btn btn-primary").attr("href", response.articles[i].url).attr("target", "blank").text("See Full Story")
      articleBody.append(button)
      $("#mainCardContents").append(newArticleDiv)
    }
  })


// City DropDown JavaScript

var dropDownList = [];

var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("https://covid-19-testing.github.io/locations/texas/complete.json", requestOptions)
  .then(response => response.json())
  .then(result => {
    result.forEach(function (clinic) {
      if (dropDownList.indexOf(clinic.physical_address[0].city) === -1) {
        dropDownList.push(clinic.physical_address[0].city)
      }

    });




    dropDownList.forEach(function (listValue) {

      var button = document.createElement("button");
      $(button).addClass("dropdown-item");
      button.innerHTML = listValue;


      $(".dropdown-menu").append(button);


    });


    // var locations = [];


    console.log(result);





    function clinicLocations() {
      $("#testList").empty();
      var cityLocal = (this.textContent);
      var locations = result.filter(item => item.physical_address[0].city === cityLocal)

      locations.forEach(location => {

        var li_Div = $("<li class='list-group-item'>");
        var address = $("<p>").text("Address: " + location.physical_address[0].address_1);
        var name = $("<p>").text("Name: " + location.name);
        if (location.phones[0] !== undefined) {
          var phone = $("<p>").text("Phone: " + location.phones[0].number);
        } else {
          var phone = $("<p>").text("Phone: None" );
        }

        li_Div.append(name, address, phone);

        li_Div.appendTo("#testList");



      })


    }
    $(".dropdown-item").on("click", clinicLocations)
  })
  .catch(error => console.log('error', error));





// Title Animation

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml1 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml1 .letter',
    scale: [0.3,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 600,
    delay: (el, i) => 70 * (i+1)
  }).add({
    targets: '.ml1 .line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700,
    offset: '-=875',
    delay: (el, i, l) => 80 * (l - i)
  }).add({
    targets: '.ml1',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

////// scroll to top //////

$(document).ready(function(){
  //Check to see if the window is top if not then display button
  $(window).scroll(function(){
      if ($(this).scrollTop() > 100) {
          $('.scrollToTop').fadeIn();
      } else {
          $('.scrollToTop').fadeOut();
      }
  });
  //Click event to scroll to top
  $('.scrollToTop').click(function(){
      $('html, body').animate({scrollTop : 0},800);
      return false;
  });
});