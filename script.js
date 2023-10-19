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
