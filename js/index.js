// Your code goes here

// MY VARIABLES
const navArea = document.querySelector("nav.nav");
const navLinks = navArea.querySelector("a");
const logoSpot = document.querySelector("h1");
const bus = document.querySelector("img");
const imgContent = document.querySelector("div.img-content");
const mapImg = imgContent.querySelector("img");
const boatImg = document.querySelector(".img-fluid rounded");
const passwordBox = document.querySelector('input[type="password"]');
let yes = true;
const stateArea = document.querySelector(".content-destination");
const state = stateArea.querySelector("h2");
const statePara = stateArea.querySelector("p");
const statePic = stateArea.querySelector("img");
const states = [
  "Florida",
  "Wisconsin",
  "North Dakota",
  "Pennsylvania",
  "Georgia",
];

// NAV AREA
//prevents links from refreshing
navLinks.addEventListener("click", (e) => e.preventDefault());

// 1 alert box
logoSpot.addEventListener("click", () => alert("Honk honk!"));

// 2/3 mouse enter/leave
logoSpot.addEventListener("mouseenter", (e) => {
  e.target.style.color = "purple";
});
logoSpot.addEventListener("mouseleave", (e) => {
  e.target.style.color = "black";
});

// 4 logs everytime the page is resized
window.addEventListener("resize", (e) => {
  console.log("resized");
});

//MID-SECTION

// 5 doubleclick changes image
mapImg.addEventListener("dblclick", (e) => {
  if (yes) {
    mapImg.src = "img/adventure.jpg";
  } else {
    mapImg.src = "img/drive.jpg";
  }
  yes = !yes;
  e.stopPropagation();
});

// 6/7 testing
stateArea.addEventListener("mousedown", (e) => {
  stateArea.style.fontFamily = "Impact,Charcoal,sans-serif";
  statePara.textContent = "Get ready to start your grand new adventure!";
  statePic.src = "img/alisana.png";
  statePara.style.color = "red";

  stateArea.addEventListener("mouseout", (e) => {
    stateArea.style.fontFamily = "";
    statePara.style.color = "black";
    statePara.textContent =
      " Expedition excursion design darn excursion fun, clean simple organized WordPress Travel colorful webdesign. Traveler blogger website design expedition clean excursion traveling.";
    statePic.src = "img/destination.jpg";
  });
});

//BOTTOM-AREA

// 8 changes the name of states
state.addEventListener("mouseover", (e) => {
  let randomizer = Math.floor(Math.random() * states.length);

  state.textContent = `Pick your Destination ${states[randomizer]}`;
});

//FOOTER
// 9 logs when the page is loaded(feels like im making stuff up at this point)
window.addEventListener("load", () => {
  console.log("page has loaded");
});

// 10 focus event(im getting desperate)
passwordBox.addEventListener("focus", (e) => {
  e.target.style.background = "orange";
});
