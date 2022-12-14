let navbar = document.querySelector(".navbar");
document.querySelector("#menu-bar").onclick = () => {
  navbar.classList.toggle("active2");
};
document.querySelector("#close").onclick = () => {
  navbar.classList.remove("active2");
};

window.onscroll = () => {
  navbar.classList.remove("active2");
  if (window.scrollY > 100) {
    document.querySelector("header").classList.add("active");
  } else {
    document.querySelector("header").classList.remove("active");
  }
};

let themeToggler = document.querySelector("#theme-toggler");

themeToggler.onclick = () => {
  themeToggler.classList.toggle("fa-sun");
  if (themeToggler.classList.contains("fa-sun")) {
    document.querySelector("body").classList.add("active3");
  } else {
    document.querySelector("body").classList.remove("active3");
  }
};

document.querySelectorAll(".small-image-1").forEach((images) => {
  images.onclick = () => {
    document.querySelector(".big-image-1").src = images.getAttribute("src");
  };
});

document.querySelectorAll(".small-image-2").forEach((images) => {
  images.onclick = () => {
    document.querySelector(".big-image-2").src = images.getAttribute("src");
  };
});

document.querySelectorAll(".small-image-3").forEach((images) => {
  images.onclick = () => {
    document.querySelector(".big-image-3").src = images.getAttribute("src");
  };
});

let countDate = new Date("dec 1, 2022 00:00:00").getTime();

function countDown() {
  let now = new Date().getTime();
  gap = countDate - now;

  let seconds = 1000;
  let minutes = seconds * 60;
  let hours = minutes * 60;
  let days = hours * 24;

  let d = Math.floor(gap / days);
  let h = Math.floor((gap % days) / hours);
  let m = Math.floor((gap % hours) / minutes);
  let s = Math.floor((gap % minutes) / seconds);

  document.getElementById("days").innerText = d;
  document.getElementById("hours").innerText = h;
  document.getElementById("minutes").innerText = m;
  document.getElementById("seconds").innerText = s;
}

setInterval(function () {
  countDown();
}, 1000);
