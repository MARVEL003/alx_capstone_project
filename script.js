var navLinks = document.getElementById("navLinks");
function showMenu() {
  navLinks.style.right = "0px";
}
function hideMenu() {
  navLinks.style.right = "-700px";
}

// JavaScript for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    hideMenu()
    window.scrollTo({
      behavior: "smooth",
      top: targetSection.offsetTop,
    });
  });
});

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Collect form data
    const formData = new FormData(this);

    // Send form data to the server using Fetch API
    fetch("server.php", {
        method: "POST",
        body: formData,
    })
    .then(response => {
        if (response.ok) {
            return response.text();
        } else {
            throw new Error("Network response was not ok.");
        }
    })
    .then(data => {
        // Handle the response from the server (e.g., show a success message)
        console.log(data);
    })
    .catch(error => {
        // Handle errors (e.g., show an error message)
        console.error("Error:", error);
    });
});

