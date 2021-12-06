let lineOne = document.getElementById("line-one");
let lineTwo = document.getElementById("line-two");
let lineThree = document.getElementById("line-three")

//MENU---------------------------------
$("#hamburgerMenuBtn").click(function(){
  $("#menu-list").slideToggle("600");
  lineOne.classList.toggle("line-one-animation");
  lineTwo.classList.toggle("line-two-animation");
  lineThree.classList.toggle("line-three-animation");
})


$("#provinz").click(function(){
  $(".provinz-list").slideToggle("600");
})


//SOCIAL MEDIA ICONS --------------------

let socialMediaBox = document.getElementById("social-media");

socialMediaBox.addEventListener('click',function(){
  socialMediaBox.classList.toggle("slideIn");
})