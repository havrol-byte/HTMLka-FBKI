const sliderTrack = document.getElementById("sliderTrack");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const slides = Array.from(document.querySelectorAll(".slide"));
const visibleSlides = 3;

let currentIndex = 0;

function updateSlider() {
  const maxIndex = Math.max(slides.length - visibleSlides, 0);

  if (currentIndex > maxIndex) {
    currentIndex = maxIndex;
  }

  const slideWidth = slides[0].offsetWidth;
  const gap = 20;
  const offset = currentIndex * (slideWidth + gap);

  sliderTrack.style.transform = `translateX(-${offset}px)`;

  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === maxIndex;
}

prevBtn.onclick = function () {
  if (currentIndex > 0) {
    currentIndex -= 1;
    updateSlider();
  }
};

nextBtn.onclick = function () {
  const maxIndex = Math.max(slides.length - visibleSlides, 0);

  if (currentIndex < maxIndex) {
    currentIndex += 1;
    updateSlider();
  }
};

window.addEventListener("load", updateSlider);
