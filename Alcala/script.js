let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// ====== scroll sections active link ======
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  //   ====== sticky navbar ======
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};


ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });



// ====== log in feature ======
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get the entered username and password
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Perform your login validation here (e.g., check against a predefined username and password)
  if (username != '' && password != '') {
    // Show the website content
    document.getElementById('formContent').style.display = 'none';
    document.getElementById('websiteContent').style.display = 'block';
    localStorage.setItem('isLoggedIn', true); // Store the login status in local storage
    location.reload();
  } else {
    // Clear the form fields and display an error message
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    alert('Invalid username or password. Please try again.');
  }
});

window.addEventListener('load', function() {
  if (localStorage.getItem('isLoggedIn')) {
    document.getElementById('formContent').style.display = 'none';
    document.getElementById('websiteContent').style.display = 'block';
  }
});

function logout() {
  localStorage.removeItem('isLoggedIn'); // Remove the login status from local storage
  document.getElementById('formContent').style.display = 'block';
  document.getElementById('websiteContent').style.display = 'none';
  location.reload();
}


