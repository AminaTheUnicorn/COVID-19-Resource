
// API for news API
var newsAPI = "4d2b9f062a9846ddb0e115c2ff221c20"
var newsAPIDomains = "dallasnews.com,wfaa.com,fox4news.com,nbcdfw.com,star-telegram.com,metroplexdaily.com,dallasobserver.com,texasmonthly.com,wfaa.com,texastribune.org,dallascityhall.com,dfw.cbslocal.com,texasstandard.org,thetexan.news,kera.org,dshs.state.tx.us";
var newsUrl = 'https://newsapi.org/v2/everything?sortBy=publishedAt&pageSize=10&qInTitle=+covid-19 OR(+coronavirus OR +corona-virus OR +disease OR +pandemic)&domains=' + newsAPIDomains + '&apiKey=' + newsAPI;
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
   
 
  
    
    dropDownList.forEach(function(listValue){
   
   var button = document.createElement("button");
   $(button).addClass("dropdown-item"); 
   button.innerHTML = listValue;
    

    $(".dropdown-menu").append(button);


    });


    // var locations = [];
    // var cityLocal = dropDownList;
    // console.log(cityLocal);
    // console.log(result);

     console.log(result.physical_address[0].address_1);
   
    
    result.forEach(function(clinicLocations){
    if (locations.indexOf(clinicLocations.physical_address[0].city) === cityLocal ) {
     
     var li_Div = document.createElement("li");
     var address = $("<p>").text(result.physical_address[0].address_1);
     var name = $("<p>").text(result.name);
     var phone = $("<p>").text(result.phones[0].number);
    
   
    
    } else {
      
    }
    })
    
     $(".dropdown-item").onClick = function() {clinicLocations()};



    

  })


  .catch(error => console.log('error', error));
