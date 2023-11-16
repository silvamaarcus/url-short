// Ativando Menu Mobile

const bx = document.querySelector(".bx");
const menu_mobile = document.querySelector(".menu-mobile");
const link_mobile = document.querySelectorAll(".link-menu-mobile");

bx.addEventListener("click", () => {
  bx.classList.toggle("active");

  menu_mobile.classList.toggle("showmenu");
});

link_mobile.forEach((link) => {
  link.addEventListener("click", () => {
    bx.classList.toggle("active");
  });
});
