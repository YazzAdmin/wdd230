function toggleMenu() {
    var nav = document.querySelector('.navigation');
    var menuToggle = document.querySelector('.menu-toggle');
    
    // Toggle the 'active' class to show/hide the menu
    nav.classList.toggle('active');
    
    // Check if the navigation menu is open or closed
    var isActive = nav.classList.contains('active');
    
    // Navigation position
    if (isActive) {
        nav.style.flexDirection = 'column';
    } else {
        
        nav.style.flexDirection = 'row';
    }
    
    // Update the menu toggle button text 
    menuToggle.textContent = isActive ? 'Close' : 'Menu';
}