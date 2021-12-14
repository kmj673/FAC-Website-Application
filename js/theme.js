let dark = document.querySelector(".dark");
let light = document.querySelector(".light");

//if moon emoji is clicked sun emoji will be appeared.
//dark theme
dark.addEventListener("click", () => {
  light.classList.remove("hidden");
  dark.classList.add("hidden");
  document.body.style.backgroundColor = "#000";
});

//light theme
//if sun emoji is clicked moon emoji will be appeared.
light.addEventListener("click", () => {
  dark.classList.remove("hidden");
  light.classList.add("hidden");
  document.body.style.backgroundColor = "#fff";
});
