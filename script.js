
var newsAPI = "4d2b9f062a9846ddb0e115c2ff221c20"
var newsUrl = 'https://newsapi.org/v2/everything?domains=dallasnews.com,wfaa.com,fox4news.com,nbcdfw.com,star-telegram.com&q=covid-19&apiKey=' + newsAPI;

fetch(newsUrl)
.then(function(response) {
console.log(response.json());
})
