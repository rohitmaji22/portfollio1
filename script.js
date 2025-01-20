gsap.fromTo(
  ".loading-page",
  { opacity: 1 },
  {
    opacity: 0,
    display: "none",
    duration: 1.5,
    delay: 3.5,
  }
);

gsap.fromTo(
  ".svg",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 2,
    delay: 0.5,
  }
);

gsap.fromTo(
  ".logo-name",
  {
    x:150,
    y: 50,
    opacity: 0,
  },
  {
    x:300,
    y: 0,
    opacity: 1,
    duration: 2,
    delay: 0.5,
  }
);
gsap.fromTo(
  ".logo-text",
  {
    y: 50,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 2,
    delay: 0.5,
  }
);
  
// Circle trail animation
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "#00d4ff", "#21daff", "#25dbff", "#4bbfd6", "#35ddff", "#54e2ff", 
  "#69e5ff", "#8fecff", "#b5f3ff", "#e0faff", "#ffffff"
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function (e) {
  coords.x = e.clientX;
  coords.y = e.clientY;
});

function animateCircles() {
  let x = coords.x;
  let y = coords.y;

  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";

    circle.style.scale = (circles.length - index) / circles.length;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });

  requestAnimationFrame(animateCircles);
}

animateCircles();
const toggle = document.getElementById('toggle');
const stick = document.querySelector('.stick');
menuIcon.onclick = () =>{
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

let menuIcon = document . querySelector('#menu-icon');
let navbar = document . querySelector('.navbar');
let sections = document . querySelector('section');
let navLinks = document . querySelector('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop -150;
      let height = sec.offsetHeight;
      let id= sec.getAttribute('id');

      if(top >= offset && top < offset + height){
        navLinks.forEach(links => {
          links.classList.remove('active');
          document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
        })
      }
    })
}
