let dark = document.querySelector(".dark");
let light = document.querySelector(".light");

dark.addEventListener("click", () => {
  light.classList.remove("hidden");
  dark.classList.add("hidden");
});

light.addEventListener("click", () => {
  dark.classList.remove("hidden");
  light.classList.add("hidden");
});
