
var newsAPI = "4d2b9f062a9846ddb0e115c2ff221c20"
var newsAPIDomains = "dallasnews.com,wfaa.com,fox4news.com,nbcdfw.com,star-telegram.com";
var cityName = "wylie"
var newsUrl = 'https://newsapi.org/v2/everything?qInTitle="+covid-19" OR("+coronavirus") AND(' + cityName + ')&pageSize=100&domains=' + newsAPIDomains + '&apiKey=' + newsAPI;

fetch(newsUrl)
.then(function(response) {
console.log(response.json());
})


var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://covid-19-testing.github.io/locations/texas/complete.json", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));