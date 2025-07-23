

  // Mobile menu toggle functionality
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });




    window.addEventListener("scroll", () => {
    const header = document.getElementById("header");
    window.scrollY > 100 ?  header.classList.add("active"):header.classList.remove("active");
  });