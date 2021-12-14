//grab the container div
const weeks = document.querySelectorAll(".week");
const container = document.querySelector(".container");
const body = document.querySelector("body");

//render each week with promptsObjs key and value
//popup with Document Object Model manipulation.
function eachWeek(popUp, weekNumber, info) {
  // console.log(weekNumber, info);
  const weekSpan = document.createElement("span");
  const weekText = document.createTextNode(`${weekNumber}`);
  weekSpan.append(weekText);
  popUp.append(weekSpan);
  weekSpan.classList.add("popUpContent");

  const topicSpan = document.createElement("span");
  const topicText = document.createTextNode(`${info.topic}`);
  topicSpan.append(topicText);
  popUp.append(topicSpan);
  topicSpan.classList.add("popUpContent");

  const platformSpan = document.createElement("span");
  const platformText = document.createTextNode(`${info.platform}`);
  platformSpan.append(platformText);
  popUp.append(platformSpan);
  platformSpan.classList.add("popUpContent");

  const linkAnchor = document.createElement("a");
  const linkText = document.createTextNode(`${info.link}`);
  linkAnchor.append(linkText);
  linkAnchor.href = linkText.textContent; //for extracting the string for anchor tag href
  popUp.append(linkAnchor);
  linkAnchor.classList.add("popUpContent");
}

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
