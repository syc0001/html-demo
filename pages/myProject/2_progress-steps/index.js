const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const move = document.getElementById("move");
const circles = document.querySelectorAll(".circle");

console.log(circles);

let currentActive = 1;

prevBtn.addEventListener("click", function () {
    currentActive--;
    if (currentActive < 1) {
        currentActive = 1;
    }
    update();
});

nextBtn.addEventListener("click", function () {
    currentActive++;
    if (currentActive > circles.length) {
        currentActive = circles.length;
    }
    update();
});

function update() {
    //doSomething
    circles.forEach((circle, index) => {
        // console.log(`index:${index}`);
        // console.log(`currentActive:${currentActive}`);
        if (index < currentActive) {
            circle.classList.add("active");
        } else {
            circle.classList.remove("active");
        }
    })

    const active = document.querySelectorAll(".active");
    move.style.width = (active.length - 1) / (circles.length - 1) * 100 + "%"

    if (currentActive === 1) {
        prevBtn.disabled = true;
    } else if (currentActive === circles.length) {
        nextBtn.disabled = true;
    } else {
        prevBtn.disabled = false;
        nextBtn.disabled = false;
    }
}