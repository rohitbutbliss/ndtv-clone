import {navbar, footer, addFunctionality} from '../components/navbar.js';
document.getElementById('navbar').innerHTML = navbar();
document.getElementById('footer').innerHTML = footer();
addFunctionality();

const data = [
    {
        imageUrl: "https://c.ndtvimg.com/2022-01/o9q0f2bg_sonu-nigam_120x90_05_January_22.jpg?downsize=105:79",
        title: "Why Should They (Tamils) Speak In Hindi? Singer Sonu Nigam Weighs In",
    },
    {
        imageUrl: "https://c.ndtvimg.com/2022-03/sann8158_vladimir-putin-afp-pic_240x180_02_March_22.jpg?downsize=105:79",
        title: "Putin To Undergo Cancer Treatment, Hand Over Power, Claims US Media Report",
    },
    {
        imageUrl: "https://c.ndtvimg.com/2022-04/cqgiq278_harshal-patel-bcciipl_625x300_27_April_22.jpg?downsize=105:79",
        title: "Worked At Pakistani Guy's Perfume Store: RCB Star On Experience In USA",
    },
    {
        imageUrl: "https://c.ndtvimg.com/2022-05/j1qg90k_smriti-irani_120x90_03_May_22.jpg?downsize=105:79",
        title: "Smriti Irani's Visit To Rahul Gandhi's Constituency Wayanad Sparks Buzz",
    },
    {
        imageUrl: "https://c.ndtvimg.com/2021-09/pq3njnqg_sunil-gavaskar-afp_120x90_29_September_21.jpg?downsize=105:79",
        title: "Hasn't Done Anything...: Gavaskar Weighs In On KKR Dropping Star Player",
    },
    {
        imageUrl: "https://c.ndtvimg.com/2022-05/qeuubv7o_ben-stokes-afp_625x300_03_May_22.jpg?im=FaceCrop,algorithm=dnn,width=105,height=79",
        title: "Want Selfless Cricketers: Stokes Aims To Mould England In His Image",
    },
    {
        imageUrl: "https://c.ndtvimg.com/2020-11/2i385c4g_karnataka-home-minister-basavraj-bommai_120x90_24_November_20.jpg?downsize=105:79",
        title: "Hypothetical Questions: BJP Karnataka In-Charge on Leader Change Buzz",
    },
    {
        imageUrl: "https://c.ndtvimg.com/2019-06/ejeneur4_nitish-kumar-prashant-kishor-pti_120x90_09_June_19.jpg?downsize=105:79",
        title: "Prashant Kishor Stood Up Nitish Kumar On Sunday. Sources Explain Why",
    },
    {
        imageUrl: "https://c.ndtvimg.com/2022-05/52sk3f8g_unverified-video-of-chennai-police-with-vignesh-man-killed-in-police-custodymay-3_120x90_03_May_22.jpg?downsize=105:79",
        title: "Chennai Man Custodial Death: A CCTV Video Triggers Claims, Counterclaims",
    },
    {
        imageUrl: "https://c.ndtvimg.com/2021-03/rjjnemm_vaccine-generic-pixabay-240_240x180_03_March_21.jpg?downsize=105:79",
        title: "Coronavirus Vaccination Tracker",
    },
];

data.forEach((el)=>{
    let box = document.createElement('div');
    box.style.display = "flex";
    box.style.marginBottom = "5px";
    box.style.marginTop = "20px";

    let image = document.createElement('img');
    image.src = el.imageUrl;
    image.style.width = "105px";
    image.style.height = "79px";
    image.style.borderRadius = "5px";

    let title = document.createElement('p');
    title.innerText = el.title;
    title.style.padding = "10px";
    title.style.fontSize = "14px";
    title.style.fontWeight = "bold";

    box.append(image, title);
    document.getElementById('fetchData').append(box);
});

// const covidData = async () => {
    // const url = "https://corona.lmao.ninja/v2/countries/india";
    // try{
    //     let res = await fetch(url);
    //     let data2 = res.json();
    //     console.log('data:', data2);
    // }
    // catch(err){
    //     console.log('err:', err);
    // }
// }

const section3Data = [
    {
        imgUrl: "https://c.ndtvimg.com/2022-03/r8o6cp08_owaisi-mayawati_120x90_11_March_22.jpg",
        title: 'We Dont Stand With Murderers: Asaduddin Owaisi On Hyderabad Killing',
    },
    {
        imgUrl: "https://c.ndtvimg.com/2022-05/tokdmt1o_delhi-bjp-leader-tajinder-baggapti_120x90_07_May_22.jpg",
        title: 'BJPs Tajinder Bagga Back Home, Delhi Police To Provide Security: 10 Facts',
    },
    {
        imgUrl: "https://c.ndtvimg.com/2022-05/n7pa92a_amit-shah-dinner-with-sourav-ganguly-ndtv-240_240x180_07_May_22.jpg",
        title: 'Sourav Ganguly Hosts Amit Shah For Dinner',
    },
    {
        imgUrl: "https://c.ndtvimg.com/2022-05/hoa1vna_zaheer_120x90_06_May_22.jpg",
        title: 'Asked If He Is Dating Sonakshi, Zaheer Reveals Advice From Salman Khan',
    },
    {
        imgUrl: "https://c.ndtvimg.com/2022-05/df8tcq0g_dwayne-bravo-virat-kohli-bcciipl_625x300_06_May_22.jpg?im=FeatureCrop,algorithm=dnn,width=240,height=180",
        title: 'Numbers Dont Lie: Dwayne Bravos Post On Virat Kohli Goes Viral',
    },
    {
        imgUrl: "https://c.ndtvimg.com/2022-05/0n1ovljo_kapil-sharma_120x90_06_May_22.jpg",
        title: 'Kapil Sharmas "Dream Comes True" As He Meets The "Legend" Kamal Haasan',
    },
];

section3Data.forEach((el) => {
    let box = document.createElement('div');
    box.style.backgroundColor = 'white';

    let image = document.createElement('img');
    image.src = el.imgUrl;
    image.style.height = "200px";
    image.style.width = "220px";
    image.style.padding = "10px";
    image.style.boxSizing = "border-box";

    let title = document.createElement('p');
    title.innerText = el.title;
    title.style.padding = "5px";
    title.style.fontSize = "15px";
    title.style.fontWeight = "500";

    box.append(image,title);

    document.querySelector('.sec3data').append(box);
});