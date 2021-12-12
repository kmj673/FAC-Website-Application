//grab the container div
const weeks = document.querySelectorAll(".week");
const container = document.querySelector(".container");
const body = document.querySelector("body");

//render each week with promptsObjs key and value
function eachWeek(popUp, weekNumber, info) {
  console.log(weekNumber, info);
  const weekSpan = document.createElement("span");
  const weekText = document.createTextNode(`${weekNumber}`);
  weekSpan.append(weekText);
  popUp.append(weekSpan);
  // popUp.classList.add("popUp");
  // console.log(popUp);
}

//popup with Document Object Model manipulation.

//close pop up
function closePopUp(e) {
  const popUp = e.target.parentNode;
  popUp.remove();
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
  week.addEventListener("click", function (event) {
    //render every week with DOM manipulation
    for (const [weekNumber, info] of Object.entries(promptsObj)) {
      if (promptsObj[`${event.target.textContent}`] === info) {
        let popUp = popup();
        eachWeek(popUp, weekNumber, info);
      }
    }
  })
);
