function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.style.display = "flex";
}

function hideMenu() {
    var menu = document.getElementById("menu");
    menu.style.display = "none";
}

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