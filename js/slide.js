// grab the container for each slide(project 123), left right button

const left = document.querySelector(".left");
const right = document.querySelector(".right");
const carousel = document.querySelectorAll(".container");
const indicator = document.querySelector(".indicator-container");

let index = 0;

function rightClicked() {
  carousel[index].classList.remove("active");
  carousel[index].classList.add("hidden");
  indicator.children[index].children[0].classList.remove("indicator-active");
  indicator.children[index].children[0].classList.add("indicator-hidden");
  index++;

  // if index increased and hit 3, then index is going back to number 0
  if (index === 5) {
    index = 0;
  }
  carousel[index].classList.remove("hidden");
  carousel[index].classList.add("active");
  indicator.children[index].children[0].classList.add("indicator-active");
  indicator.children[index].children[0].classList.remove("indicator-hidden");
}

function leftClicked() {
  carousel[index].classList.remove("active");
  carousel[index].classList.add("hidden");
  indicator.children[index].children[0].classList.remove("indicator-active");
  indicator.children[index].children[0].classList.add("indicator-hidden");

  index--;
  // if index decreased and hit -1(from first click), then index is going to be number 3
  if (index === -1) {
    index = 4;
  }
  carousel[index].classList.add("active");
  carousel[index].classList.remove("hidden");
  indicator.children[index].children[0].classList.add("indicator-active");
  indicator.children[index].children[0].classList.remove("indicator-hidden");
}

// right or left is clicked
right.addEventListener("click", rightClicked);
left.addEventListener("click", leftClicked);
