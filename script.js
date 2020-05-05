

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://covid-19-testing.github.io/locations/:state/complete.json/phones/?format=json", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));