//grab the container div
const weeks = document.querySelectorAll(".week");
const container = document.querySelector(".container");
const body = document.querySelector("body");
//render each week with promptsObjs key and value
function eachWeek(weekNumber, info) {
  console.log(weekNumber, info);
}

//popup with Document Object Model manipulation.

//close pop up
function closePopUp(event) {
  const popUp = event.target.parentNode;
  popUp.style.display = "none";
}

// create  pop up
const popup = () => {
  const popUp = document.createElement("div");
  popUp.classList.add("popUp");
  container.append(popUp);
  // add x to close popup
  const xButton = document.createElement("span");
  xButton.textContent = "X";
  xButton.classList.add("xButton");
  popUp.append(xButton);
  xButton.addEventListener("click", closePopUp);
  // add things with DOM in popup
  return popUp;
};

//link to each week element with addEventListener
weeks.forEach((week) =>
  week.addEventListener("click", function () {
    const popUp = popup();
    const weekCount = event.target.textContent;
    //render every week with DOM manipulation
    for (const [weekNumber, info] of Object.entries(promptsObj)) {
      if (weekCount === weekNumber) {
        eachWeek(weekNumber, info);
      }
    }
  })
);
