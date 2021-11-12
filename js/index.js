'use strict';

//Fullname fade-in animation
const fullName = document.querySelector('.intro__full-name');
const fullNameSplit = fullName.textContent.split('');
fullName.textContent = '';
fullNameSplit.forEach((letter) => {
  fullName.innerHTML += '<span class="letter">' + letter + '</span>';
});

const animationTimer = setInterval(fadeIn, 60);
let currentLetter = 0;

function fadeIn() {
  const letterSpans = document.querySelectorAll('.letter');
  letterSpans[currentLetter].classList.add('fade-in');
  currentLetter++;
  if (currentLetter === letterSpans.length) {
    clearInterval(animationTimer);
  }
}

//Progressbars animation
const progressbars = document.querySelectorAll('.progress-bar__progress');

function animateProgress(bar) {
  const maxProgress = parseInt(bar.dataset['progress']);
  let currProgress = parseInt(bar.style.width.replace('px', ''));
  const progressAnimationTimer = setInterval(() => {
    bar.style.width = currProgress + '%';
    currProgress++;

    if (currProgress === maxProgress) {
      clearInterval(progressAnimationTimer);
    }
  }, 12);
}

progressbars.forEach((bar) => {
  bar.style.width = 0;
  animateProgress(bar);
});

//Acoordion functionlity
const accordionBtns = document.querySelectorAll('.project__name');

accordionBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const projectItem = e.target.closest('.projects__project');
    const projectContent = projectItem.querySelector('.project__content');
    const icon = projectItem.querySelector('.fa-chevron-down');
    btn.classList.toggle('project__name--active');
    projectContent.classList.toggle('project__content--active');
    icon.classList.toggle('fa-chevron-down--active');
  });
});
