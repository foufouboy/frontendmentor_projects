const openIcon = document.querySelector(".open-burger-icon");
const closeIcon = document.querySelector(".close-icon img");
const modal = document.querySelector(".burger-menu-modal");
const showMenu = () => {
    modal.classList.add("burger-active");
    modal.style.opacity = 1;
};
const hideMenu = (e) => {
    if (e.target != modal && e.target != closeIcon)
        return;
    modal.classList.remove("burger-active");
    modal.style.opacity = 0;
};
openIcon.addEventListener("click", showMenu);
closeIcon.addEventListener("click", e => hideMenu(e));
modal.addEventListener("click", e => hideMenu(e));
