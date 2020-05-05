
var newsAPI = "4d2b9f062a9846ddb0e115c2ff221c20"
var newsAPIDomains = "dallasnews.com,wfaa.com,fox4news.com,nbcdfw.com,star-telegram.com,metroplexdaily.com,dallasobserver.com,texasmonthly.com,wfaa.com,texastribune.org,dallascityhall.com,dfw.cbslocal.com,texasstandard.org,thetexan.news,kera.org,dshs.state.tx.us";
var newsUrl = 'https://newsapi.org/v2/everything?sortBy=publishedAt&pageSize=10&qInTitle=+covid-19 OR(+coronavirus OR +corona-virus OR +disease OR +pandemic)&domains=' + newsAPIDomains + '&apiKey=' + newsAPI;

fetch(newsUrl)
    .then(response => response.json())
    .then(function (response) {
        console.log(response);
        for (let i = 0; i < response.articles.length; i++) {
            var newArticleDiv = $("<article>").attr("class", "card");
            var articleHeader = $("<h5>").attr("class", "card-header").text(response.articles[i].title);
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





var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

fetch("https://covid-19-testing.github.io/locations/texas/complete.json", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));