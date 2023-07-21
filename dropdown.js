const dropdown = document.querySelector(".dropdown");
const dropdownContent = document.querySelector(".dropdown-content");

// Add event listener to show the content on hover
dropdown.addEventListener("mouseenter", function () {
  dropdownContent.style.display = "block";
});

// Add event listener to hide the content when the mouse leaves the menu
dropdown.addEventListener("mouseleave", function () {
  dropdownContent.style.display = "none";
});