// Your code goes here
// NAV AREA

const logoSpot = document.querySelector("h1");
const bus = document.querySelector("img");

//allows the logo area to be

// alert box
logoSpot.addEventListener("click", () => alert("Honk honk!"));

// mouse enter/leave
logoSpot.addEventListener("mouseenter", (e) => {
  e.target.style.color = "purple";
});
logoSpot.addEventListener("mouseleave", (e) => {
  e.target.style.color = "black";
});

//mid-section images

const imgContent = document.querySelector("div.img-content");
const mapImg = imgContent.querySelector("img");
const boatImg = document.querySelector(".img-fluid rounded");

mapImg.addEventListener("dblclick", (e) => {
  e.src = "img/drive.jpg";
});
