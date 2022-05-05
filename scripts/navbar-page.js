import { navbar, footer, addFunctionality } from "../components/navbar.js";

document.querySelector("#navbar").innerHTML = navbar();
document.querySelector("#footer").innerHTML = footer();
addFunctionality();
const appendData = (data) => {
    data.forEach(({ headline, description, image_url, posted_date }) => {
        const div = document.createElement("div");
        const img_div = document.createElement("div");
        const img = document.createElement("img");
        const text_div = document.createElement("div");
        const head = document.createElement("p");
        const date = document.createElement("p");
        const desc = document.createElement("p");
        desc.style.fontSize = "14px";
        desc.style.color = "#666666";
        desc.innerText = description;
        date.innerText = posted_date;
        date.style.color = "#2e2e2e";
        date.style.fontSize = "12px";
        head.innerText = headline;
        head.style.fontSize = "20px";
        head.style.fontWeight = "500";
        img.src = image_url;
        img.style.width = "144px";
        img.style.borderRadius = "6px";
        img_div.append(img);
        div.style.display = "flex";
        div.style.gap = "20px";
        div.style.border = "1px solid #eaeaea";
        div.style.padding = "20px";
        div.style.borderRadius = "4px";
        div.style.boxSizing = "border-box";
        text_div.style.display = "flex";
        text_div.style.flexDirection = "column";
        text_div.style.gap = "10px";
        text_div.append(head, date, desc);
        div.append(img_div, text_div);
        div.addEventListener("click", () => {
            localStorage.setItem("newsContent", JSON.stringify({ description, headline, posted_date, image_url }))
            window.location.href = "../article.html"
        })
        document.querySelector("#trending-rhs").append(div);
    });
};
const fetchNews = async () => {
    const value = JSON.parse(localStorage.getItem("newsQuery"));
    document.querySelector("#path-text").innerText = value[0];
    document.querySelector("#main-title").innerText = value[0];
    const url = `https://ndtvnews-api.herokuapp.com/general?category=values(${value[1]})&field=values(headline,description,url,image_url,posted_date)`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.news[0].articles);
    appendData(data.news[0].articles);
};
fetchNews();