/*let hamburgerMenuBtn = document.getElementById("hamburgerMenuBtn");
let menuToggle = document.getElementById("menu-list");

/*hamburgerMenuBtn.addEventListener('click', function(){
  menuToggle.classList.toggle("menu-list-visibility");
})*/

$("#hamburgerMenuBtn").click(function(){
  $("#menu-list").slideToggle("600");
})