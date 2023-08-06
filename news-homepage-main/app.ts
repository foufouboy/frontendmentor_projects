const showMenu = (): void => {
    document
        .querySelector(".nav-menu")
        .classList
        .add("active");
}

const hideMenu = (): void => {
    document
        .querySelector(".nav-menu")
        .classList
        .remove("active");
}
