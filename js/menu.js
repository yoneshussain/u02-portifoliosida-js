const button = document.querySelector("#menu-button")
const menuPanel = document.querySelector(".menu-panel");


button.addEventListener("click", () => {

    const isHidden = menuPanel.classList.toggle("menu-hidden")


    if (!isHidden) {
        button.setAttribute("aria-expanded", true)
    } else {
        button.setAttribute("aria-expanded", false)

    }

})

