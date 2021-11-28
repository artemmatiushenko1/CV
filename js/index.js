'use strict';

//Text fade-in animation
function animateText(textElements) {
  textElements.forEach((element) => {
    const textSplit = element.textContent.split('');
    element.textContent = '';
    textSplit.forEach((letter) => {
      element.innerHTML += '<span class="letter">' + letter + '</span>';
    });
    let currentLetter = 0;
    const letterSpans = element.querySelectorAll('.letter');
    const animationTimer = setInterval(() => {
      letterSpans[currentLetter].classList.add('fade-in');
      currentLetter++;
      if (currentLetter === letterSpans.length) {
        clearInterval(animationTimer);
      }
    }, 60);
  });
}

const textElements = document.querySelectorAll('.animated-text');
animateText(textElements);

//Progressbars animation
const progressbars = document.querySelectorAll('.progress-bar');

function animateProgress(bar) {
  const maxProgress = parseInt(bar.dataset['progress']);
  let currProgress = parseInt(bar.getAttribute('value'));
  const progressAnimationTimer = setInterval(() => {
    if (currProgress >= maxProgress) {
      clearInterval(progressAnimationTimer);
    }
    bar.value = currProgress;
    currProgress += 0.5;
  }, 5);
}

progressbars.forEach((bar) => {
  bar.value = 0;
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
