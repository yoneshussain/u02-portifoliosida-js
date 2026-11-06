const button = document.querySelector("#menu-button")
const menuPanel = document.querySelector(".menu-panel");


button.addEventListener("click", () => {

    const isHidden = menuPanel.classList.toggle("menu-hidden")


    button.setAttribute("aria-expanded", String(!isHidden))

})

