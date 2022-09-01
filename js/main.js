const slider = document.getElementById('slider'),
      btnPrev = document.getElementById('btnPrev'),
      btnNext = document.getElementById('btnNext'),
      slides = Array.from(slider.children);

slides.forEach((slide, index) => {
  if (index !== 0) slide.classList.add('hidden');
  slides[0].setAttribute('data-active', '');
  slide.dataset.index = index;
  slide.addEventListener('click', () => showSlide('next'));
});

btnNext.addEventListener('click', () => showSlide('next'));
btnPrev.addEventListener('click', () => showSlide('prev'));

const showSlide = direction => {
  const slide = slider.querySelector('[data-active]');
  const index = +slide.dataset.index;
  slide.classList.add('hidden');
  slide.removeAttribute('data-active');

  let showSlideIndex;
  if (direction === 'next') {
    showSlideIndex = index === slides.length - 1 ? 0 : index + 1;
  } else {
    showSlideIndex = index === 0 ? slides.length - 1 : index - 1;
  }

  const showSlide = slider.querySelector(`[data-index="${showSlideIndex}"]`);
  showSlide.classList.remove('hidden');
  showSlide.setAttribute('data-active', '');
};
