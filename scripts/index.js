(function () {
  const navbar = document.getElementById('navbar');
  const mobileMenu = document.getElementById('mobileMenu');

  const NAV_H_DEFAULT = 72;
  const NAV_H_SCROLLED = 60;

  function onScroll() {
    if (window.scrollY > 24) {
      navbar.classList.remove('at-top');
      navbar.classList.add('scrolled');
      mobileMenu.style.top = NAV_H_SCROLLED + 'px';
    } else {
      navbar.classList.remove('scrolled');
      navbar.classList.add('at-top');
      mobileMenu.style.top = NAV_H_DEFAULT + 'px';
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.classList.toggle('dark');

  const iconSun = document.getElementById("iconSun");
  const iconMoon = document.getElementById("iconMoon");

  if (iconSun && iconMoon) {
    iconSun.classList.toggle("hidden", !isDark);
    iconMoon.classList.toggle("hidden", isDark);
  }
}

function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  const menuIcon = document.getElementById("menuIcon");
  const closeIcon = document.getElementById("closeIcon");

  const isOpen = menu.classList.toggle("max-h-[400px]");
  menu.classList.toggle("max-h-0");

  if (isOpen) {
    menuIcon.classList.add("hidden");
    closeIcon.classList.remove("hidden");
    document.body.classList.add("menu-open");
  } else {
    menuIcon.classList.remove("hidden");
    closeIcon.classList.add("hidden");
    document.body.classList.remove("menu-open");
  }
}