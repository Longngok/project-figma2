function togglebar()
{
  document.getElementById('nav-responsive').classList.toggle('active');
  document.getElementById('togglebar').classList.toggle('change')
  // document.body.style.backgroundColor = "black";
}

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

// function toggleImage(event, imgId) {
//   event.preventDefault();
//   var imgElement = document.getElementById(imgId);
  
//   if (imgElement.src.endsWith('img/icon/Vector11.png')) {
//     imgElement.src = 'img/icon/close.png'; // Thay đổi đường dẫn hình ảnh mới
//   } else {
//     imgElement.src = 'img/icon/Vector11.png'; // Quay lại hình ảnh ban đầu
//   }
// }



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