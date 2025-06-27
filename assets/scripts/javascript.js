$(document).ready(function () {
    $('.mqscroller').mqScroller({
        htmlDir: 'ltr',
        loop: true,
        direction: 'left',
        duration: 20000,
        pauseOnHover: true,
        gap: 10
    });
    
    
    
const playbutton = document.querySelector('.playbutton')
let video = document.querySelector('.cbgAdvisorySection video')
let started = false



playbutton.addEventListener('click', () => {

  if(video.paused) {
    video.play()
    playbutton.classList.add('playing')
  } else {
    video.pause()
    playbutton.classList.remove('playing')
  }
})


video.addEventListener('ended', () => {
  playbutton.classList.remove('playing')  
})


video.addEventListener('play', () => {
  playbutton.classList.add('playing')  
})


video.addEventListener('pause', () => {
  playbutton.classList.remove('playing')  
})
});