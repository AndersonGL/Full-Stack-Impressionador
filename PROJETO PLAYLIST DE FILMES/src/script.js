const searchButton = document.getElementById("search-button"); // opcional nomeclatura: $searchButton ou searchButtonElement
const overlay = document.getElementById("modal-overlay");

function searchButtonClickHandler() {
  if (overlay) {
	overlay.classList.add("open");
  }
}

if (searchButton) {
  searchButton.addEventListener("click", searchButtonClickHandler);
}