const background = document.getElementById("modal-background");
function backgroundClickHandler() {
  background.classList.remove("open");
}
background.addEventListener("click", backgroundClickHandler);