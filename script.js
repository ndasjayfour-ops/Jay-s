{const sections = ['home', 'sports', 'live', 'movies'];
  sections.forEach(id => {
    document.getElementById(id).style.display = id === sectionId ? 'block' : 'none';
  });

  const navItems = document.querySelectorAll("nav ul li");
  navItems.forEach(item => item.classList.remove("active"));
  event.target.classList.add("active");
}