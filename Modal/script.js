'use strict';
const show_model_Btn = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const close_modal_Btn = document.querySelector('.close-modal');

const show_model = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const close_modal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const keypressReact = function (x) {
  if (x.key === 'Backspace') {
    close_modal();
  }
};

for (let i = 0; i < show_model_Btn.length; i++) {
  show_model_Btn[i].addEventListener('click', show_model);
}
close_modal_Btn.addEventListener('click', close_modal);

document.addEventListener('keydown', keypressReact);
