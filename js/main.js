
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

document.addEventListener('DOMContentLoaded', function() {
  var navItem = document.querySelector('.nav__item');
  var subMenuContainer = document.querySelector('.sub-menu__container');

  navItem.addEventListener('click', function(e) {
    e.preventDefault();
    subMenuContainer.classList.toggle('show');
  });

  document.addEventListener('click', function(e) {
    var target = e.target;
    if (!target.closest('.nav__item') && !target.closest('.sub-menu__container')) {
      subMenuContainer.classList.remove('show');
    }
  });

  // Thêm sự kiện lắng nghe sự thay đổi kích thước cửa sổ
  window.addEventListener('resize', function() {
    if (window.innerWidth >= 768) {
      // Xóa lớp 'show' khi kích thước cửa sổ đủ lớn
      subMenuContainer.classList.remove('show');
    }
  });

  // Kiểm tra kích thước cửa sổ ban đầu
  if (window.innerWidth >= 768) {
    // Xóa lớp 'show' khi kích thước cửa sổ đủ lớn
    subMenuContainer.classList.remove('show');
  }
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
