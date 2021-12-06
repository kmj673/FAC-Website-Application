let currentPage = document.querySelector("h3");
let currentNav = document.querySelector("ul");

for (let i = 0; i < currentNav.children.length; i++) {
  if (currentPage.textContent === currentNav.children[i].textContent) {
    currentNav.children[i].style.backgroundColor = "#bbdecf";
  }
}
