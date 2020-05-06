var newsAPI = "4d2b9f062a9846ddb0e115c2ff221c20"
var newsAPIDomains = "dallasnews.com,wfaa.com,fox4news.com,nbcdfw.com,star-telegram.com,metroplexdaily.com,dallasobserver.com,texasmonthly.com,wfaa.com,texastribune.org,dallascityhall.com,dfw.cbslocal.com,texasstandard.org,thetexan.news,kera.org,dshs.state.tx.us";
var newsUrl = 'https://newsapi.org/v2/everything?pageSize=100&domains=' + newsAPIDomains + '&qInTitle=covid-19 OR(coronavirus) OR(Coronavirus disease) OR(Coronavirus pandemic)&apiKey=' + newsAPI;

fetch(newsUrl)
  .then(function (response) {
    console.log(response.json());
  })

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
    console.log(dropDownList);
 
    var dropDownBtn = $(".dropdown-menu");
    var dropList = $("<button>").addClass(".dropdown-item");
    
    dropDownList.forEach(function (listValue) {
   
   var button = document.createElement("button");
   $("button").addClass("dropdown-item"); 
   button.innerHTML = listValue;
    

    $(".dropdown-menu").append(button);


    });


    // var matches = document.querySelector("dropDownList");
    // dropDownList.forEach(function() {
    //   if()
    // }

    // for (var i = 0; i < dropDownList.length; i++){
    //   var dropList = $("<button>").addClass("dropdown-item");
    //   $("dropList").append(dropDownList)

    // }

  })
  .catch(error => console.log('error', error));