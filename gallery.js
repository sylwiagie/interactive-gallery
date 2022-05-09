/* girls.js - Interaktywna Galeria
 * Plik gallery.js
 * Tutaj będziemy dodawać nasz kod.
 */
let currentNumber = 1;
let isPlay = false;

function showSlide(argument) {
  document.querySelector('.show').classList.remove('show');
  document.querySelector('#slide' + argument).classList.add('show');
  currentNumber = argument;
  selectPin(argument);
}

for (let i = 1; i <= 5; i++) {
  document
    .querySelector('#pin' + i)
    .addEventListener('click', () => showSlide(i));
}

function showNextSlide() {
  let newNumber = currentNumber + 1;

  if (newNumber > 5) {
    newNumber = 1;
  }

  showSlide(newNumber);
}
document.querySelector('#next').addEventListener('click', showNextSlide);

function showPreviousSlide() {
  let newNumber = currentNumber - 1;

  if (newNumber < 1) {
    newNumber = 5;
  }

  showSlide(newNumber);
}
document.querySelector('#prev').addEventListener('click', showPreviousSlide);

function selectPin(currentNumber) {
  document.querySelector('.selected').classList.remove('selected');
  document.querySelector('#pin' + currentNumber).classList.add('selected');
}

selectPin(currentNumber);

function play() {
  if (isPlay == false) {
    document.querySelector('.play').classList.add('on');
    isPlay = !isPlay;

    slideShowInterwal = setInterval(showNextSlide, 1000);
  } else {
    document.querySelector('.play').classList.remove('on');
    isPlay = !isPlay; 

    clearInterval(slideShowInterwal); 
  }
}
document.querySelector('#play').addEventListener('click', play);
