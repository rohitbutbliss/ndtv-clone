import { navbar, footer, addFunctionality } from "../components/navbar.js";
document.querySelector("#navbar").innerHTML = navbar();
document.querySelector("#footer").innerHTML = footer();
addFunctionality();

// url of cities --> https://ndtvnews-api.herokuapp.com/cities?city=values(mumbai)&field=values(headline,image_url,posted_date)

// api key for trending news --> 2e2559eea1d142e5bb73a5e4ed589315

// top-headlines url --> https://newsapi.org/v2/top-headlines?country=in&apiKey=2e2559eea1d142e5bb73a5e4ed589315


//Trending data

const trending = async () => {
  try {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=2e2559eea1d142e5bb73a5e4ed589315";

    let response = await fetch(url);

    let data = await response.json();
    let x = data.articles
    console.log("Trending", x);
    appendTrending(x)
  } catch (error) {
    console.log("Error", error);
  }
};

const appendTrending = (value) => {
    value.forEach(el => {
        let box = document.createElement('div')
        box.setAttribute('class', 'trendingBox')

        let imgBox = document.createElement('div')
        imgBox.style.height = '50px'
        imgBox.style.width = '60px'

        let contBox = document.createElement('div')
        contBox.setAttribute('class', 'contBox')

        let img = document.createElement('img')
        img.src = el.urlToImage;
        img.style.height = '52px'
        img.style.width = '60px'

        let title = document.createElement('p')
        title.textContent = el.description

        let hr = document.createElement('hr')

        imgBox.append(img)
        contBox.append(title)
        box.append(imgBox, contBox)
        document.querySelector('#resultTrending').append(box, hr)
    });
};

trending();
//success trending :D

let a;
document.querySelector("#city").addEventListener("change", function () {
  a = document.querySelector("#city").value;
  console.log(a);

  document.getElementById('results').innerHTML = null;
     
  fetch(
    `https://ndtvnews-api.herokuapp.com/cities?city=values(${a})&field=values(headline,image_url,posted_date)`
  )
    .then((response) => response.json())
    .then((data) => {
      let x = data.news[0].articles;
      console.log('City Data',x);
      trendingSecond(x);
    })
    .catch((error) => {
      console.log("Error", error);
    });
});


const trendingSecond = (value) => {
    value.forEach(({headline, image_url}) => {

        // document.getElementById('results').innerHTML = null;

        let box = document.createElement('div')
        box.setAttribute('class', 'trendBox2')

        let img = document.createElement('img')
        img.src = image_url;
        img.style.height = '108px'
        img.style.width = '144px'

        let title = document.createElement('p')
        title.textContent = headline;

        box.append(img, title)
        document.querySelector('#results').append(box)
    });
}