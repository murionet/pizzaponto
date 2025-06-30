document.addEventListener("DOMContentLoaded", function () {
  const searchForm = document.querySelector("#search-form");
  const searchIcon = document.querySelector("#search-icon");
  const closeBtn = document.querySelector("#close");
  const menuBars = document.querySelector("#menu-bars");
  const navbar = document.querySelector(".navbar");
  const searchBox = document.querySelector("#search-box");
  const iconsContainer = document.querySelector(".icons");

  function fecharBarraPesquisa() {
    searchForm.classList.remove("active");
  }

  function adjustSearchIconPosition() {
    if (window.innerWidth <= 768) {
      searchIcon.style.left = "2rem";
    } else {
      searchIcon.style.left = "calc(50% - 25rem)";
    }
  }

  searchIcon.addEventListener("click", function () {
    searchForm.classList.add("active");
    searchBox.focus();
  });

  closeBtn.addEventListener("click", fecharBarraPesquisa);

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      fecharBarraPesquisa();
    }
  });

  searchForm.addEventListener("click", function (event) {
    if (event.target === searchForm) {
      fecharBarraPesquisa();
    }
  });

  menuBars.addEventListener("click", function () {
    menuBars.classList.toggle("fa-times");
    navbar.classList.toggle("active");
    iconsContainer.classList.toggle("active");
  });

  window.addEventListener("scroll", function () {
    menuBars.classList.remove("fa-times");
    navbar.classList.remove("active");
    iconsContainer.classList.remove("active");
    fecharBarraPesquisa();
  });

  window.addEventListener("resize", adjustSearchIconPosition);
  adjustSearchIconPosition(); 
});
