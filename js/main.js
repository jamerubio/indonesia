gsap.registerPlugin(ScrollTrigger);

/* -------------------------
   HERO SLIDESHOW
--------------------------*/
let index = 0;
const slides = document.querySelectorAll(".hero-slide");

function showSlide() {
  slides.forEach(s => s.classList.remove("active"));
  slides[index].classList.add("active");
  index = (index + 1) % slides.length;
}

if (slides.length) {
  showSlide();
  setInterval(showSlide, 5000);
}

/* -------------------------
   HERO ANIMATION
--------------------------*/
gsap.from(".hero-title", {
  opacity: 0,
  y: 40,
  duration: 1,
  ease: "power3.out"
});

gsap.from(".hero-sub", {
  opacity: 0,
  y: 20,
  delay: 0.3
});

/* -------------------------
   SECTION REVEAL (Stripe核心)
--------------------------*/
gsap.utils.toArray(".section").forEach((sec) => {
  gsap.from(sec, {
    scrollTrigger: {
      trigger: sec,
      start: "top 80%",
    },
    opacity: 0,
    y: 60,
    duration: 1,
    ease: "power2.out"
  });
});

/* -------------------------
   GRID STAGGER
--------------------------*/
gsap.from(".grid-3 > div", {
  scrollTrigger: {
    trigger: ".grid-3",
    start: "top 80%",
  },
  opacity: 0,
  y: 40,
  stagger: 0.15,
  duration: 0.8
});

/* -------------------------
   FLOATING PARALLAX ELEMENTS
--------------------------*/
gsap.to(".float-card", {
  y: 30,
  repeat: -1,
  yoyo: true,
  duration: 3,
  ease: "sine.inOut"
});