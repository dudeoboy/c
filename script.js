function toggleMenu() {
  var menuIcon = document.querySelector(".menu-icon");
  var menuContent = document.getElementById("menuContent");
  
  menuIcon.classList.toggle("change");
  menuContent.style.display = menuContent.style.display === "block" ? "none" : "block";
}

// Close the menu if the user clicks outside of it
window.onclick = function(event) {
  var menuIcon = document.querySelector(".menu-icon");
  var menuContent = document.getElementById("menuContent");

  if (!menuIcon.contains(event.target) && !menuContent.contains(event.target)) {
    menuIcon.classList.remove("change");
    menuContent.style.display = "none";
  }
}
