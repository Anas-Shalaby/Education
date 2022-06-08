"use strict";
// changr navbar

window.addEventListener("scroll", function () {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});

// Show faq answer

const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");

    // Change icon

    const icon = faq.querySelector(".faq__icon i");

    if (icon.className === "fa-solid fa-plus") {
      icon.className = "fa-solid fa-minus";
    } else {
      icon.className = "fa-solid fa-plus";
    }
  });
});

// Show navbar

const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector(".open-menu-btn");
const closeBtn = document.querySelector(".close-menu-btn");

menuBtn.addEventListener("click", () => {
  menu.style.display = "flex";
  menuBtn.style.display = "none";
  closeBtn.style.display = "inline-block";
});

closeBtn.addEventListener("click", () => {
  menu.style.display = "none";
  menuBtn.style.display = "inline-block";
  closeBtn.style.display = "none";
});

// const btn2 = document.querySelector(".btn-2");
// const inputs = document.querySelectorAll("input");
// const text = document.querySelector("textarea");
// btn2.addEventListener("click", () => {
//   inputs.forEach((input) => {
//     input.value = "";
//   });
//   text.value = "";
// });
