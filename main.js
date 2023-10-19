// Navbar 

function toggleMenu() {
  var menu = document.getElementById("mobile-menu");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

// Hero
window.addEventListener("load", function() {
  var btn = document.querySelector(".btn");
  btn.classList.add("animate-bounce");
});

// Booking

const form = document.getElementById("book-form");

// Add a submit event listener
form.addEventListener("submit", function(event) {
  // Prevent the default form submission
  event.preventDefault();

  // Get the form data
  const formData = new FormData(form);

  // Convert the form data to an object
  const data = Object.fromEntries(formData);

  // Log the data to the console
  console.log(data);

  // Display a success message
  alert("Thank you for booking with us. We will contact you soon.");

  // Reset the form
  form.reset();
});

var swiper = new Swiper('.swiper-container', {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
