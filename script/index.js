const board = document.querySelector('.container');
const SQUARES_NUMBER = 1482;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mousemove', () => {
    setColor(square);
  });

  square.addEventListener('mouseleave', () => {
    removeColor(square);
  });

  board.append(square);
}

const setColor = (element) => {
  const randomColor = Math.floor(Math.random() * 15777216).toString(16);
  element.style.backgroundColor = `#${randomColor}`;
  element.style.boxShadow = `0 0 2px #${randomColor}, 0 0 10px #${randomColor}`;
};

const removeColor = (element) => {
  element.style.backgroundColor = '#222222';
  element.style.boxShadow = `0 0 2px #000`;
};