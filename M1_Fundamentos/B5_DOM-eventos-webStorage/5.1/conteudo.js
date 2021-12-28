const body = document.body;
const header = document.getElementById('header-container');
const leftSection = document.getElementsByClassName('emergency-tasks')[0];
const rightSection = document.getElementsByClassName('no-emergency-tasks')[0];
const purpleTitles = document.querySelectorAll('.emergency-tasks h3');
const blackTitles = document.querySelectorAll('.no-emergency-tasks h3');
const footer = document.getElementById('footer-container');

body.style.backgroundColor = 'rgba(243,243,243,255)';
header.style.backgroundColor = 'rgba(0,176,104,255)';
leftSection.style.backgroundColor = 'rgba(255,159,132,255)';
rightSection.style.backgroundColor = 'rgba(249,220,93,255)';
footer.style.background = 'rgba(1,53,51,255)';

for (let i = 0; i < purpleTitles.length; i += 1) {
  purpleTitles[i].style.backgroundColor = 'rgba(165,0,244,255';
}

for (let i = 0; i < blackTitles.length; i += 1) {
  blackTitles[i].style.backgroundColor = 'rgba(35,37,36,255)';
}