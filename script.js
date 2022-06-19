const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

//this is to show the menu
toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

//to hide the menu after click
navbarLinks.addEventListener("click", () => {
  navbarLinks.classList.remove("active");
});

const bottomDivOne = document.querySelectorAll(".bottom-div");
bottomDivOne.forEach((item) => {
  item.addEventListener("click", () => {
    document.location.href = "#productlist";
  });
});

// const bottomDivTwo = document.getElementsByClassName("bottom-div two")[0];
// bottomDivTwo.addEventListener("click", () => {
//   document.location.href = "#productlist";
// });
// const bottomDivThree = document.getElementsByClassName("bottom-div three")[0];
// bottomDivThree.addEventListener("click", () => {
//   document.location.href = "#productlist";
// });
