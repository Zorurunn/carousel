const slider = document.querySelector('.slider');
const boxes = document.querySelectorAll('.box')
const leftBtn = document.querySelector(".left")
const rightBtn = document.querySelector(".right")
const test = document.querySelector(".test")
let index = 1;
let isTransition = false;

rightBtn.addEventListener('click', () => {
    if (isTransition) return;
    index++;
    slider.style.transition = "transform 0.4s ease-in-out";
    slider.style.transform = `translateX(${(-index * 100) / 5}%)`;
})

leftBtn.addEventListener('click', () => {
    if (isTransition) return;
    index--;
    slider.style.transition = "transform 0.4s ease-in-out";
    slider.style.transform = `translateX(${(-index * 100) / 5}%)`;
})

slider.addEventListener("transitionend", () => {
    if (index === 4) {
        index = 1;
        slider.style.transition = "none";
        slider.style.transform = `translateX(${(-index * 100) / 5}%)`;
    } else if (index === 0) {
        index = 3;
        slider.style.transition = "none";
        slider.style.transform = `translateX(${(-index * 100) / 5}%)`;
    }
    isTransition = false;
})

slider.addEventListener("transitionstart", () => {
    isTransition = true;
})


document.addEventListener('DOMContentLoaded', function () {

    let timerID;

    const slideImg = () => {
        if (isTransition) return;
        index++;
        slider.style.transition = "transform 0.4s ease-in-out";
        slider.style.transform = `translateX(${(-index * 100) / 5}%)`;

        console.log('3sec ungurluu');
    }


    timerID = setInterval(slideImg, 4000);


    function cancel() {
        window.clearInterval(timerID);
        console.log('Duusgaw');
    }

    document.getElementById('cansel').addEventListener('click', cancel, false);
}, false);