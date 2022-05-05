import {getdata} from "../components/trenddata.js"
import { navbar,footer,addFunctionality } from "../components/navbar.js";

  let nav=document.getElementById("navbar");
  nav.innerHTML=navbar();

  let foot=document.getElementById("footer");
  foot.innerHTML=footer();

  addFunctionality();
let news=getdata();
console.log(news);

const append = (article) => {
    console.log("videos", article);
    localStorage.setItem("articles", JSON.stringify(article));
    let show_articles = document.getElementById("show_article");
    show_articles.innerHTML = null;
  
    article.forEach(
      ({category,description,headline,image_url,posted_date,url}) => {
        //console.log(default);
        let div = document.createElement("div");
  
        let image = document.createElement("img");
        image.src = image_url;
        image.id = "thumb";
  
        let iframe = document.createElement("iframe");
  
        iframe.src = url;
  

        let div2=document.createElement("div");
        // iframe.allow = "fullscreen";
        let div1=document.createElement("div");
  
        let headlines = document.createElement("h4");
        headlines.innerText = headline;

        let categorys=document.createElement("p");
        categorys.innerText=category;

        let descriptions=document.createElement("p");
        descriptions.innerText=description;

        let posted_dates=document.createElement("p");
        posted_dates.innerText="Updated: May 3,2022";
        posted_dates.class="update"

        let horizontal=document.createElement("hr");

        let share=document.createElement("p");
        share.innerText="Share Trending On: ";
        share.id="share";
  
        div1.append(headlines,posted_dates,share);
        div.append(image);
        div2.append(div,div1)
        show_articles.append(div2);
        headlines.addEventListener("click", function () {
         
  
          
          console.log("hii");
          //startvideo(frame);
  
         
        });
      }
    );
  };

  append(news);

  