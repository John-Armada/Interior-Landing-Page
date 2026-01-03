// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const nav = document.querySelector('.nav');
  
  if (mobileMenuBtn && nav) {
    mobileMenuBtn.addEventListener('click', function() {
      nav.classList.toggle('active');
      
      // Toggle icon between bars and X (for both FontAwesome and fallback)
      const icon = this.querySelector('i');
      const fallback = this.querySelector('.menu-icon-fallback');
      
      if (nav.classList.contains('active')) {
        if (icon) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-xmark');
        }
        if (fallback) {
          fallback.textContent = '✕';
        }
      } else {
        if (icon) {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
        if (fallback) {
          fallback.textContent = '☰';
        }
      }
    });
    
    // Close menu when clicking on a nav link
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        nav.classList.remove('active');
        const icon = mobileMenuBtn.querySelector('i');
        const fallback = mobileMenuBtn.querySelector('.menu-icon-fallback');
        
        if (icon) {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
        if (fallback) {
          fallback.textContent = '☰';
        }
      });
    });
  }
});
