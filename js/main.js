document.getElementById('open-toggle').addEventListener('click', function() {
  document.getElementById('header-main').classList.add('open');
  document.getElementById('open-toggle').classList.add('d-none');
  document.getElementById('close-toggle').classList.remove('d-none');
});

document.getElementById('close-toggle').addEventListener('click', function() {
  document.getElementById('header-main').classList.remove('open');
  document.getElementById('open-toggle').classList.remove('d-none');
  document.getElementById('close-toggle').classList.add('d-none');
});

document.getElementById('close-toggle').addEventListener('click', function() {
  document.getElementById('header-main').classList.remove('open');
});

document.getElementById('close-toggle').addEventListener('click', function() {
  document.getElementById('header-main').classList.remove('open');
});

function toggleSubMenu(event) {
  event.preventDefault();
  var submenuContainer = event.currentTarget.parentNode.querySelector('.sub-menu__container');
  submenuContainer.classList.toggle('show');
}

var backButton = document.querySelector('.sub-menu__container .d-none--rp');
backButton.addEventListener('click', function(event) {
  event.preventDefault();
  var submenuContainer = backButton.parentNode;
  submenuContainer.classList.remove('show');
});




var video = document.getElementById("my-video");
var playButton = document.getElementById("play-button");
var isPlaying = false;

function toggleVideoPlay() {
  if (isPlaying) {
    video.pause();
    playButton.style.display = "block";
  } else {
    video.play();
    playButton.style.display = "none";
  }
  isPlaying = !isPlaying;
}

video.addEventListener("click", toggleVideoPlay);
playButton.addEventListener("click", toggleVideoPlay);


var footerBtn = document.getElementById("footer-btn")

function toogleConfirm(){
  event.preventDefault();

  var emailInput = document.getElementById("email__Input");
  var emailValue = emailInput.value;

  if (emailValue !== "") {
    alert("Thank " + emailValue + " for subcribe!");
    emailInput.value="";
  } else {
    alert("please input your email!");
  }
}

footerBtn.addEventListener("click", toogleConfirm);

fetch('header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header').innerHTML = data;
  });


  function decreaseQuantity() {
    var quantityInput = document.getElementById('quantity');
    var quantity = parseInt(quantityInput.value);

    if (quantity > 0) {
      quantityInput.value = quantity - 1;
    }
  }

  function increaseQuantity() {
    var quantityInput = document.getElementById('quantity');
    var quantity = parseInt(quantityInput.value);
    
    quantityInput.value = quantity + 1;
  }
