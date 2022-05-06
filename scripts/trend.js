import { getdata } from "../components/trenddata.js";
import { navbar, footer, addFunctionality } from "../components/navbar.js";

let nav = document.getElementById("navbar");
nav.innerHTML = navbar();

let foot = document.getElementById("footer");
foot.innerHTML = footer();

addFunctionality();
let news = getdata();
console.log(news);

const append = (article) => {
  console.log("videos", article);
  localStorage.setItem("articles", JSON.stringify(article));
  let show_articles = document.getElementById("show_article");
  show_articles.innerHTML = null;

  article.forEach(
    ({ category, description, headline, image_url, posted_date, url }) => {
      //console.log(default);
      let div = document.createElement("div");

      let image = document.createElement("img");
      image.src = image_url;
      image.id = "thumb";

      let iframe = document.createElement("iframe");

      iframe.src = url;

      let div2 = document.createElement("div");
      // iframe.allow = "fullscreen";
      let div1 = document.createElement("div");

      let headlines = document.createElement("h4");
      headlines.innerText = headline;

      let categorys = document.createElement("p");
      categorys.innerText = category;

      let descriptions = document.createElement("p");
      descriptions.innerText = description;

      let posted_dates = document.createElement("p");
      posted_dates.innerText = "Updated: May 3,2022";
      posted_dates.class = "update";

      let horizontal = document.createElement("hr");

      let share = document.createElement("p");
      share.innerText = "Share Trending On: ";
      share.setAttribute("class", share);

      let svg1 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg1.xmlns = "http://www.w3.org/2000/svg";
      svg1.setAttribute("width", "18");
      svg1.setAttribute("height", "18");
      svg1.setAttribute("viewBox", "0 0 24 24");

      let iconPath = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      );

      iconPath.setAttribute(
        "d",
        "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
      );

      let svg2 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg2.xmlns = "http://www.w3.org/2000/svg";
      svg2.setAttribute("width", "18");
      svg2.setAttribute("height", "18");
      svg2.setAttribute("viewBox", "0 0 24 24");

      let iconPath1 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      );

      iconPath1.setAttribute(
        "d",
        "M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"
      );
      svg2.appendChild(iconPath1);
      svg1.appendChild(iconPath);
      let div3 = document.createElement("div");

      div3.append(share, svg1, svg2);
      div3.setAttribute("class", "social");
      div1.append(headlines, posted_dates, div3);
      div.append(image);
      div2.append(div, div1);
      show_articles.append(div2);
      headlines.addEventListener("click", function () {
        console.log("hii");
        //startvideo(frame);
      });
    }
  );
};

append(news);
