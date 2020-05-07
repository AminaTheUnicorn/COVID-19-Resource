# Covid-19 Resource for the DFW Metroplex

As residents of the greater DFW Metroplex we wanted an easy to use resource to gather relevant, local, and up to date news regarding the Covid-19 Pandemic that is sweeping the country. 

## Here's how it works

Using an open API source from [newsapi.org] we were able to set up an article search using local DFW news sources. Search terms were included in the queryUrl to filter in articles related to the covid-19 pandemic and the 5 most recent are displayed in the application. The article display shows the viewer the title of the article, a brief description, the source of the article, as well as a link to the source that opens up in a new browser tab. 

With this we were able to achieve our original goal of creating an easy to use resource, but while we were developing the application, we decided we could make this a much more powerful recourse for other DFW residents by including a list of locations providing covid-19 testing. Utilizing [https://covid-19-apis.postman.com/], an open API, were able to compile a list of cities with testing facilities. These cities are listed in a drop-down menu. When you select a city from the drop-down menu you will be shown a list of locations providing testing with an address to that location as well as contact info if available.

Lastly, we decided we wanted the application to help prevent the spread of covid-19. We included a section to display helpful guidelines from the Center of Disease Control and the World Health Organization as well as direct links to the CDC and WHO for more current information as conditions develop.

The following image demonstrates the application functionality:

![Covid-19 Resource for the DFW Metroplex Gif](./Assets/Farmers-Weather-Dashboard.gif)

## Technologies Used
- jQuery and javascript - Used to fetch data from [newsapi.org] and [https://covid-19-apis.postman.com/] open API sources as well as dynamically change html and to display response data. 
- Bootstrap - Used to pull existing html and CSS for creating resposive organizational structer and styling for the site.
- HTML - Used to create parent elements on the DOM.
- CSS - Styles html elements on page.
- GitHub - Hosts repository that can be deployed to GitHub Pages.