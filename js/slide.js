// grab the container for each slide(project 123), left right button

const left = document.querySelector(".left");
const right = document.querySelector(".right");
const carousel = document.querySelectorAll(".container");

let index = 0;

function rightClicked() {
  carousel[index].classList.remove("active");
  carousel[index].classList.add("hidden");

  index++;
  // if index increased and hit 3, then index is going back to number 0
  if (index === 3) {
    index = 0;
  }
  carousel[index].classList.remove("hidden");
  carousel[index].classList.add("active");
}

function leftClicked() {
  carousel[index].classList.remove("active");
  carousel[index].classList.add("hidden");

  index--;
  // if index decreased and hit -1(from first click), then index is going to be number 3
  if (index === -1) {
    index = 2;
  }
  carousel[index].classList.add("active");
  carousel[index].classList.remove("hidden");
}

// right or left is clicked
right.addEventListener("click", rightClicked);
left.addEventListener("click", leftClicked);
