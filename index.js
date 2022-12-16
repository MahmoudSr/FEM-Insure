const navToggle = document.querySelector(".nav-toggle");

navToggle.addEventListener("click", () => {
  const navigation = document.querySelector(".nav__list");
  navigation.classList.toggle("open");
  navToggle.classList.toggle("change");
  document.body.classList.toggle("stay");
});

// https://github.com/MahmoudSr

const go = () => {
  window.open("https://github.com/MahmoudSr");
};
