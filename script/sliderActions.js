let currentSlide = 0;

const getNextSlideIndex = (currentIndex, totalSlides) =>
  currentIndex === totalSlides - 1 ? 0 : currentIndex + 1;

const getPreviousSlideIndex = (currentIndex, totalSlides) =>
  currentIndex === 0 ? totalSlides - 1 : currentIndex - 1;

const updateSlideVisibility = (slides) => {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[currentSlide].classList.add("active");
};

export const initSlideShow = (prevElement, nextElement, slides) => {
  updateSlideVisibility(slides);

  nextElement.addEventListener("click", () => {
    currentSlide = getNextSlideIndex(currentSlide, slides.length);
    updateSlideVisibility(slides);
  });

  prevElement.addEventListener("click", () => {
    currentSlide = getPreviousSlideIndex(currentSlide, slides.length);
    updateSlideVisibility(slides);
  });
};
