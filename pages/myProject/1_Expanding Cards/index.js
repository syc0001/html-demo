const panels = document.querySelectorAll(".panel");

panels.forEach(value => {
    value.addEventListener("click", () => {
        removeActiveClass();
        value.classList.add("active");
    })
});

function removeActiveClass() {
    panels.forEach(value => {
        value.classList.remove("active");
    })
}