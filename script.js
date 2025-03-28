let nextBtn = document.querySelector(".next-btn")
let heroVideo = document.querySelector(".hero-video")
let herotext = document.querySelector(".gaming-text")

let videos = ["videos/hero-2.mp4", "videos/hero-3.mp4", "videos/hero-4.mp4", "videos/hero-1.mp4"]
let words = ["identity","reality","agentic ai","gaming"]
let i = 0
nextBtn.addEventListener("click", () => {
    heroVideo.src = videos[i]
    herotext.textContent = words[i]
    i++
    if (i > 3) {
        i = 0
    }
})

const scrollRevealOption = {
    distance: "100px",
    origin: "right",
    duration: 1000,
};
ScrollReveal().reveal(".hero-info h1", {
    ...scrollRevealOption,
    origin: "left",
});
ScrollReveal().reveal(".gaming-text", {
    ...scrollRevealOption,
    origin: "right",
});
ScrollReveal().reveal(".hero-info p , .hero-info button", {
    ...scrollRevealOption,
    origin: "top",
    interval: 200,
    delay: 100,
});
ScrollReveal().reveal(".about p", {
    ...scrollRevealOption,
    origin: "bottom",
    delay: 200,
});
ScrollReveal().reveal(".about h4, .about h5", {
  ...scrollRevealOption,
  origin: "top",
  delay: 600,
});
ScrollReveal().reveal(".story .borel-font", {
    ...scrollRevealOption,
    origin: "bottom",
    delay: 400,
});
ScrollReveal().reveal(".story h1", {
    ...scrollRevealOption,
    distance: "200px",
    origin: "right",
    delay: 500,
});
ScrollReveal().reveal(".story img", {
    ...scrollRevealOption,
    distance: "200px",
    origin: "left",
    delay: 400,
});
ScrollReveal().reveal(".story .title-box", {
    ...scrollRevealOption,
    distance: "200px",
    origin: "bottom",
    delay: 400,
});
ScrollReveal().reveal(".info > h3,.info > p", {
  ...scrollRevealOption,
  distance: "200px",
  origin: "left",
  delay: 400,
});
ScrollReveal().reveal(".updates .right .card", {
  ...scrollRevealOption,
  distance: "300px",
  interval: 500,
  origin: "right",
  delay: 200,
});
ScrollReveal().reveal(".contact p", {
    ...scrollRevealOption,
    origin: "bottom",
    distance: "200px",
    delay: 300,
});
ScrollReveal().reveal(".contact h1", {
    ...scrollRevealOption,
    origin: "bottom",
    distance: "200px",
    delay: 400,
});
ScrollReveal().reveal(".contact img:first-of-type", {
    ...scrollRevealOption,
    origin: "right",
    distance: "200px",
    delay: 500,
});
ScrollReveal().reveal(".contact img:nth-of-type(3)", {
    ...scrollRevealOption,
    origin: "bottom",
    distance: "200px",
    delay: 500,
});