function invertColor() {
  const navElement = document.querySelector("nav");
  const icons = document.querySelectorAll(".nav-icons");
  this.scrollY > 700
    ? navElement.classList.remove("transparent")
    : navElement.classList.add("transparent");
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

product.forEach((products) => {
  productObserver.observe(products);
});

const testimonials = document.querySelectorAll(".testimonial-container");

const testimonialObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("testimonialSlide", entry.isIntersecting);
    });
  },
  {
    threshold: 0.2,
  }
);

testimonials.forEach((testimonial) => {
  testimonialObserver.observe(testimonial);
});
