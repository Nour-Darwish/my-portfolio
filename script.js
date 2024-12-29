// JavaScript (js/script.js)

function showProjectDetails(projectId) {
  // Hide all project details sections
  const allProjects = document.querySelectorAll('.project-detail');
  allProjects.forEach(project => project.style.display = 'none');

  // Show the clicked project details
  const selectedProject = document.getElementById(projectId);
  selectedProject.style.display = 'block';
}

document.getElementById("showProject3Btn").addEventListener("click", function() {
  // Toggle visibility of the project details and video
  document.getElementById("project3").style.display = "block";  // Show the project details if hidden
  document.getElementById("project3-video").style.display = "block";  // Show the video

  // Optionally hide the button after clicking
  this.style.display = "none";
});

document.getElementById("showProject4Btn").addEventListener("click", function() {
  // Toggle visibility of the project details and video
  document.getElementById("project4").style.display = "block";  // Show the project details if hidden
  document.getElementById("project4-video").style.display = "block";  // Show the video

  // Optionally hide the button after clicking
  this.style.display = "none";
});
// Hide/Show Navbar on Scroll
let lastScrollY = window.scrollY;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > lastScrollY) {
    // Scrolling down, hide navbar
    navbar.style.top = "-60px";
  } else {
    // Scrolling up, show navbar
    navbar.style.top = "0";
  }
  lastScrollY = window.scrollY;
});


