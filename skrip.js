document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("navbarToggle");
  const navbarList = document.getElementById("navbarList");

  toggleButton.addEventListener("click", function () {
    navbarList.classList.toggle("show");
    toggleButton.classList.toggle("hide");
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 600 && navbarList.classList.contains("show")) {
      navbarList.classList.remove("show");
      toggleButton.classList.remove("hide");
    }
  });

  document.addEventListener("click", function (event) {
    const isClickInsideNavbar =
      navbarList.contains(event.target) || toggleButton.contains(event.target);

    if (!isClickInsideNavbar && navbarList.classList.contains("show")) {
      navbarList.classList.remove("show");
      toggleButton.classList.remove("hide");
    }
  });

  const navbarItems = document.querySelectorAll(".navbar-list li a");
  navbarItems.forEach(function (item) {
    item.addEventListener("click", function () {
      navbarList.classList.remove("show");
      toggleButton.classList.remove("hide");
    });
  });
});
