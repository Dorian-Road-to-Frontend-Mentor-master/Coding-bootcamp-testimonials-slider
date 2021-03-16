const cards = document.querySelectorAll('.card');
const slideArrows = document.getElementById('slide-arrows');

const moveSlide = direction => {
  if (direction === 'right') {
    cards[0].classList.add('card--hide');
    cards[1].classList.remove('card--hide');
  } else {
    cards[1].classList.add('card--hide');
    cards[0].classList.remove('card--hide');
  }
};

slideArrows.addEventListener('click', e =>
  moveSlide(e.target.dataset.direction)
);

window.addEventListener('keyup', e => {
  if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
    const direction = e.key === 'ArrowLeft' ? 'left' : 'right';
    moveSlide(direction);
  }
  console.log(e);
});
