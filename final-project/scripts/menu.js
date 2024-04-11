function toggleMenu() {
    var nav = document.querySelector('.navigation');
    var menuToggle = document.querySelector('.menu-toggle');
    
    // Toggle the 'active' class to show/hide the menu
    nav.classList.toggle('active');
    nav.classList.toggle('slide-in');
    // Update the menu toggle button text 
    menuToggle.textContent = nav.classList.contains('active') ? 'Close' : 'Menu';
}