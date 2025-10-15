// Smooth scrolling for all navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    window.scrollTo({
      top: targetElement.offsetTop - 50,
      behavior: 'smooth'
    });
  });
});

// Change navbar color when scrolling
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Highlight active menu link while scrolling
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section, header');
  const scrollPos = window.scrollY + 60; // Adjust offset for fixed navbar

  sections.forEach(section => {
    const id = section.getAttribute('id');
    const navLink = document.querySelector(`nav a[href="#${id}"]`);

    if (
      section.offsetTop <= scrollPos &&
      section.offsetTop + section.offsetHeight > scrollPos
    ) {
      navLink.classList.add('active');
    } else {
      navLink.classList.remove('active');
    }
  });
});
