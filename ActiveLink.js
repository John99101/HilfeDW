const currentPath = window.location.pathname;
console.log('Current Path:', window.location.pathname);

const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  const linkPath = link.getAttribute('href');
  console.log('Link Path:', linkPath);
  if (linkPath === currentPath) {
    link.classList.add('active');
    console.log('Matching Link:', link);
  } else {
    link.classList.remove('active');
  }
});