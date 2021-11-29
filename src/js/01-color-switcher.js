const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};

let timerId = null;

refs.startBtn.addEventListener('click', changeBackgroundColor);
refs.stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
  refs.startBtn.disabled = false;
});

function changeBackgroundColor() {
  timerId = setInterval(() => {
    const color = getRandomHexColor();
    document.body.style.background = color;
  }, 1000);
  refs.startBtn.disabled = true;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
