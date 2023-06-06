function invertColor() {
  const navElement = document.querySelector("nav");
  const icons = document.querySelectorAll(".nav-icons");
  this.scrollY > 700
    ? (navElement.classList.remove("transparent"),
      icons.forEach((icon) => {
        icon.style.filter = "invert(0%)";
      }))
    : (navElement.classList.add("transparent"),
      icons.forEach((icon) => {
        icon.style.filter = "invert(100%)";
      }));
}

window.addEventListener("scroll", invertColor, false);

const slideEl = document.querySelectorAll(".slide");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("showX", entry.isIntersecting);
    });
  },
  {
    threshold: 0.5,
  }
);

slideEl.forEach((slide) => {
  observer.observe(slide);
});

const product = document.querySelectorAll(".product-container");

const productObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("showZ", entry.isIntersecting);
    });
  },
  {
    threshold: 0.5,
  }
);

product.forEach((slide) => {
  productObserver.observe(slide);
});


const items = [
  {
    test:"ahah",
    lmfao:45
  },
  {
    testy:"asd",
    adsa:76
  }
]

localStorage.setItem("test", items)
console.log(items)