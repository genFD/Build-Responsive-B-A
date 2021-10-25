const menu = document.querySelector('.menu');
const navbar = document.querySelector('.navbar');
const navlinks = document.querySelector('.nav-links');

menu.addEventListener('click', () => {
  navbar.classList.toggle('navchange');
  navlinks.classList.toggle('linkschange');
  menu.classList.toggle('menuchange');
});
const video = document.querySelector('.video');
const playBtn = document.querySelector('.buttons i');
const bar = document.querySelector('.video-bar');

const playPause = () => {
  if (video.paused) {
    video.play();
    // playBtn.className = 'far fa-paused-circle';
    video.style.opacity = '.7';
  } else {
    video.pause();
    // playBtn.className = 'far fa-play-circle';
    video.style.opacity = '.3';
  }
};

playBtn.addEventListener('click', () => {
  playPause();
});
video.addEventListener('timeUpdate');
