const navslide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".navlinks");
  const navlinks = nav.querySelectorAll(".navlinks li");

  burger.addEventListener("click", () => {
    //   nav toggles navigation
    nav.classList.toggle("navactive");
    //   nav links animations
    navlinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = ``;
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 10 + 0.2
        }s`;
      }
    });
  });
};

navslide();
