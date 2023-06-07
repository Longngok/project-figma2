function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.style.display = "flex";
}

function hideMenu() {
    var menu = document.getElementById("menu");
    menu.style.display = "none";
}

file: script.js

document.addEventListener('DOMContentLoaded', function() {
    var playButton = document.getElementById('play-button');
    var videoIframe = document.getElementById('video-iframe');
  
    playButton.addEventListener('click', function() {
      if (videoIframe.paused) {
        videoIframe.play();
        playButton.style.display = 'none';
      } else {
        videoIframe.pause();
        playButton.style.display = 'block';
      }
    });
  
    videoIframe.addEventListener('ended', function() {
      playButton.style.display = 'block';
    });
  });
  
  