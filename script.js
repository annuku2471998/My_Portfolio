
function toggleMenu() {
    const navLinks = document.getElementById("nav-links");
    
    // Agar mobile screen hai tabhi 'active' class toggle hogi
    if (window.innerWidth <= 720) {
        navLinks.classList.toggle("active");
    }
}