const heroTexts = document.querySelector(".hero-texts");
const heroImages = document.querySelector(".hero-images");
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");

const scrollLeft = () => {
  let imageWidth = heroImages.offsetWidth;
  let textWidth = heroTexts.offsetWidth;
  heroImages.scrollLeft -= imageWidth;
  heroTexts.scrollLeft -= textWidth;
};
const scrollRight = () => {
  let imageWidth = heroImages.offsetWidth;
  let textWidth = heroTexts.offsetWidth;
  heroImages.scrollLeft += imageWidth;
  heroTexts.scrollLeft += textWidth;
};

arrowLeft.addEventListener("click", scrollLeft);
arrowRight.addEventListener("click", scrollRight);

const nav = document.querySelector("nav");
const navText = document.querySelector(".nav-text");
const closebtn = document.querySelector(".close");
const menu = document.querySelector(".menu");
const darkBack = document.querySelector(".dark-back");

document.addEventListener("mouseup", (e) => {
  if (e.target != nav && e.target != navText) {
    nav.style.height = "0px";
    darkBack.style.zIndex = "-1";
  }
});

menu.addEventListener("click", () => {
  nav.style.height = "100px";
  darkBack.style.zIndex = "1";
});
closebtn.addEventListener("click", () => {
  nav.style.height = "0px";
  darkBack.style.zIndex = "-1";
});
