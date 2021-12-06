// grab the container for each slide(project 123), left right button

const left = document.querySelector(".left");
const right = document.querySelector(".right");
const projects = document.querySelectorAll(".container");

// get which button is clicked,

function clicked(event) {
  //   console.log(event.target);
  if (event.target.textContent === ">") {
    // to check the if the container is the hidden(display visible) or not
  } else if (event.target.textContent === "<") {
  }
}

// right or left is clicked
right.addEventListener("click", clicked);
left.addEventListener("click", clicked);
