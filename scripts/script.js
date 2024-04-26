document.addEventListener("visibilitychange", function() {
  if (document.visibilityState === 'hidden') {
    document.title = "Vote us!";
  } else {
    document.title = "Alab Partylist";
  }
});

// Function to reveal elements based on scroll position
function reveal() {
  // Selecting elements with class "reveal"
  var reveals = document.querySelectorAll(".reveal");
  var elementVisible;

  // Adjusting elementVisible based on screen width
  if (window.innerWidth <= 500) {
      elementVisible = 50; // Increase element visible to 50 when screen width is max 500px
  } else {
      elementVisible = 150; // Default value
  }

  // Loop through elements with class "reveal"
  for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;

      // Check if the element is within the visible range
      if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
      } else {
          reveals[i].classList.remove("active");
      }
  }
}

// Event listener for scroll event, calling the reveal function
window.addEventListener("scroll", reveal);

// Event listener for resize event, calling the reveal function to adjust visibility based on screen width
window.addEventListener("resize", reveal);
