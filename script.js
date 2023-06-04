function invertColor() {
  let navElement = document.querySelector("nav");
  let icons = document.querySelectorAll(".nav-icons");
  this.scrollY > 800
    ? (navElement.classList.remove("transparent"),
      icons.forEach((icon) => {
        icon.style.filter = "invert(0%)";
      }))
    : (navElement.classList.add("transparent"),
      icons.forEach((icon) => {
        icon.style.filter = "invert(100%)";
      }));
      console.log("aa")
}

window.addEventListener("scroll", invertColor, false);
