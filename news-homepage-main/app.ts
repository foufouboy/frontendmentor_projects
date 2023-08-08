const openIcon: any = document.querySelector(".open-burger-icon");
const closeIcon: any = document.querySelector(".close-icon img");
const modal: any = document.querySelector(".burger-menu-modal")

const showMenu = (): void => {
    modal.classList.add("burger-active");
    modal.style.opacity = 1;
}

const hideMenu = (e): void => {
    if (e.target != modal && e.target != closeIcon) return; 

    modal.classList.remove("burger-active");
    modal.style.opacity = 0;


}

openIcon.addEventListener("click", showMenu);
closeIcon.addEventListener("click", e => hideMenu(e));
modal.addEventListener("click", e => hideMenu(e));
