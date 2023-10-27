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

var heroImage = document.querySelector("https://th.bing.com/th/id/OIG.Qu9bDFHYV5LFefwIyeEX?pid=ImgGn");

// Get the current hour
var hour = new Date().getHours();

// Define different images for different times of the day
var morningImage = "https://th.bing.com/th/id/OIG.mM26yucqSDeb3QjTTTiS?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn";
var afternoonImage = "https://th.bing.com/th/id/OIG.BTe7KUSk2B3C4pOCeV5G?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn";
var eveningImage = "https://th.bing.com/th/id/OIG.1QdvYT5uhtR1bG_un549?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn";

// Change the hero image source based on the hour
if (hour >= 6 && hour < 12) {
  // Morning
  heroImage.src = morningImage;
} else if (hour >= 12 && hour < 18) {
  // Afternoon
  heroImage.src = afternoonImage;
} else {
  // Evening
  heroImage.src = eveningImage;
}

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
