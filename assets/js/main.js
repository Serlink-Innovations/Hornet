const navHamburger = document.querySelector(".navHamburger");
const bottomNavigationBarnavItemContainer = document.querySelector(
  ".bottomNavigationBar-navItemContainer"
);

navHamburger.addEventListener("click", () => {
  if (bottomNavigationBarnavItemContainer.classList.contains("active")) {
    bottomNavigationBarnavItemContainer.classList.remove("active");
    bottomNavigationBarnavItemContainer.classList.add("hide");
  } else {
    bottomNavigationBarnavItemContainer.classList.add("active");
    bottomNavigationBarnavItemContainer.classList.remove("hide");
  }
});
