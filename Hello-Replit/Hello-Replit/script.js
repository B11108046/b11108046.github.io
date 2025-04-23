
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth' });
  });
});

function toggleGallery() {
  const gallery = document.getElementById('gallery');
  if (gallery.style.display === 'block') {
    gallery.style.display = 'none';
    document.body.style.overflow = 'auto';
  } else {
    gallery.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
}
