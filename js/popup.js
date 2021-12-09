//grab the week div
const week = document.querySelector(".week");

//render each week with promptsObjs key and value
function eachWeek(week, info) {
  console.log(week, info);
}
//render every week with DOM manipulation
for (const [week, info] of Object.entries(promptsObj)) {
  //   console.log(key, value);
  eachWeek(week, info);
}

//popup with Document Object Model manipulation.

// create elelement for pop up

// add things with DOM in popup

//link to each week element with addEventListener

// add x to close popup
