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

  const isClosed = menu.classList.contains("max-h-0");

  if (isClosed) {
    menu.classList.remove("max-h-0");
    menu.classList.add("max-h-[400px]");

    menuIcon.classList.add("hidden");
    closeIcon.classList.remove("hidden");
  } else {
    menu.classList.remove("max-h-[400px]");
    menu.classList.add("max-h-0");

    menuIcon.classList.remove("hidden");
    closeIcon.classList.add("hidden");
  }
}

