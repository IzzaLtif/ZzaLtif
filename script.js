// Aman: cek dulu apakah elemen ada
const menuToggle = document.getElementById('menu-toggle');
const navLinks  = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
    // Remove and re-add active to restart animation if needed
    if (navLinks.classList.contains('active')) {
      navLinks.querySelectorAll('a').forEach((a, i) => {
        a.style.transition = 'none';
        a.offsetHeight; // force reflow
        a.style.transition = '';
      });
    }
  });
} else {
  console.warn('Menu toggle atau nav-links tidak ditemukan. Cek id/class dan path script.js');
}
