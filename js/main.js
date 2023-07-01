function togglebar() {
  var navResponsiveElements = document.getElementsByClassName('res-menu');
  var togglebarElements = document.getElementsByClassName('toggle');

  for (var i = 0; i < navResponsiveElements.length; i++) {
    navResponsiveElements[i].classList.toggle('active');
  }

  for (var j = 0; j < togglebarElements.length; j++) {
    togglebarElements[j].classList.toggle('change');
  }
}

function openFS() {
  var menuRP = document.getElementsByClassName('res-menu--2')[0];
  menuRP.classList.toggle('active');
}

function closeFS() {
  var menuRP = document.getElementsByClassName('res-menu--2')[0];
  menuRP.classList.remove('active');
}

function toggleSubMenu(event) {
  event.preventDefault();
  var subMenu = event.currentTarget.nextElementSibling;
  subMenu.classList.toggle('active');
}



/*---submenu---*/
function toggleSubMenu(event) {
  event.preventDefault();
  var clickedSubMenuContainer = event.currentTarget.parentNode.querySelector('.sub-menu__container');
  
  var allSubMenuContainers = document.querySelectorAll('.sub-menu__container');
  for (var i = 0; i < allSubMenuContainers.length; i++) {
    if (allSubMenuContainers[i] !== clickedSubMenuContainer) {
      allSubMenuContainers[i].classList.remove('show');
    }
  }
  
  clickedSubMenuContainer.classList.toggle('show');
  
  var backButton = clickedSubMenuContainer.querySelector('.button__back');
  backButton.classList.remove('show');
}

var backButton = document.querySelector('.sub-menu__container .button__back');
backButton.addEventListener('click', function(event) {
  event.preventDefault();
  var submenuContainer = backButton.parentNode;
  submenuContainer.classList.remove('show');
  
  var parentSubMenuContainer = submenuContainer.parentNode.parentNode;
  var parentBackButton = parentSubMenuContainer.querySelector('.button__back');
  parentBackButton.classList.add('show');
});


/*---video play---*/
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




/*--subcribe confirm---*/
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

function openfs()
{
  
}