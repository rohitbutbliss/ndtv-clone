import { navbar, footer, addFunctionality } from "../components/navbar.js";

document.querySelector("#navbar").innerHTML = navbar();
document.querySelector("#footer").innerHTML = footer();
addFunctionality();

const page = JSON.parse(localStorage.getItem("newsQuery"));
const page_data = JSON.parse(localStorage.getItem("newsContent"));
//   console.log(page_data);
document.querySelector("#path-text").innerText = page[0].split(" ")[0];
document.querySelector("#page-content-title").innerText = page_data.headline;
document.querySelector("#main-title").innerText = page_data.headline;
document.querySelector("#main-desc").innerText = page_data.description;

const article_img = document.createElement("img");
const article_content = document.createElement("div");
article_content.id = "article-content";
article_img.style.width = "100%";
article_img.src = page_data.image_url;
article_content.style.fontSize = "18px";
article_content.style.lineHeight = "29px";
article_content.innerHTML = `<p>The Covid-19 pandemic killed around 15 million people worldwide in 2020 and 2021, the WHO estimated Thursday -- nearly triple the number of deaths officially attributed to the disease. The World Health Organization's long-awaited estimate of the total number of deaths caused by the pandemic -- including lives lost to its knock-on effects -- finally puts a number on the broader impact of the crisis.</p>

<p>The figures give a more realistic picture of the worst pandemic in a century, which has, according to Thursday's estimates, killed around one in 500 people worldwide and continues to claim thousands of lives each week.</p>

<p>&quot;The full death toll associated directly or indirectly with the Covid-19 pandemic between January 1, 2020 and December 31, 2021 was approximately 14.9 million (range 13.3 million to 16.6 million),&quot; the UN health agency said.</p>

<p>The figures are extremely sensitive due to how they reflect on the handling of the crisis by authorities around the world, with some countries, notably India, already contesting the far higher numbers. India's reported Covid-19 deaths for 2020-21 are 481,000, but the WHO's estimated total figure is 3.3 million to 6.5 million.</p>

<p>&quot;We need to honour the lives tragically cut short, lives we lost -- and we must hold ourselves and our policymakers accountable,&quot; Samira Asma, the WHO's data chief, told a press conference.</p>

<p>New Delhi fired back, decrying the data which put the numbers at 10 times the country's official toll as flawed.</p>

<p>The WHO estimated some 4.75 million deaths in India since 2020 could be attributed to the crisis, either directly from Covid-19 or indirectly through the pandemic's wider impact on health systems and society.</p>

<p>The Indian health and family welfare ministry in a statement accused WHO of publishing the data &quot;without adequately addressing India's concerns&quot;.</p>

<p>- Deaths due to impact - The figures, termed as excess mortality, are calculated as the difference between the number of deaths that occurred and the number that would have been expected in the absence of the pandemic, based on data from earlier years.</p>

<p>Excess mortality includes deaths directly due to Covid-19 disease, and indirectly due to the pandemic's impact on health systems and society.</p>

<p>It also factors in deaths averted during the pandemic, such as a lower risk of work-related fatalities or road accidents.</p>

<p>The WHO declared Covid an international public health emergency on January 30, 2020, after cases of the new coronavirus spread beyond China.</p>

<p>Countries worldwide reported 5.42 million Covid-19 deaths to the WHO in 2020 and 2021 -- a figure that today stands at 6.24 million, including deaths in 2022.</p>

<p>The Geneva-based organisation has long said the true number of deaths would be far higher than just the recorded fatalities put down to Covid infections.</p>

<p>Deaths linked indirectly to the pandemic are attributable to other conditions for which people were unable to access treatment because health systems were overburdened by the crisis.</p>

<p>That could include delays to surgical operations, or chemotherapy for cancer patients.</p>

<p><b>- Understanding the crisis -</b></p>
<p>The WHO said that most of the excess deaths -- 84 percent -- were concentrated in south and southeast Asia, Europe and the Americas.</p>

<p>Indeed, 10 countries alone accounted for 68 percent of all excess deaths: Brazil, Egypt, India, Indonesia, Mexico, Peru, Russia, South Africa, Turkey and the United States.</p>

<p>High-income countries accounted for 15 percent of the excess deaths; upper-middle-income nations 28 percent; lower-middle-income states 53 percent; and low-income countries four percent.</p>

<p>The global death toll was higher for men than for women -- 57 percent male and 43 percent female.</p>

<p>And 82 percent of the excess deaths were estimated to be people aged over 60.</p>

<p>&quot;These sobering data not only point to the impact of the pandemic but also to the need for all countries to invest in more resilient health systems,&quot; WHO chief Tedros Adhanom Ghebreyesus said.</p>

<p>Many countries do not have the capacity for reliable mortality surveillance and therefore do not generate the data needed to work out excess mortality rates.</p>

<p>The WHO believes that generally, six in 10 deaths worldwide are not formally recorded.</p>

<p>The WHO said the 14.9-million figure was produced by leading world experts who developed a methodology to generate estimates where data is lacking.</p>`;
document.querySelector("#trending-rhs").append(article_img, article_content);