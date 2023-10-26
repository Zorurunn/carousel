const slider = document.querySelector('.slider');
const boxes = document.querySelectorAll('.box')
const leftBtn = document.querySelector(".left")
const rightBtn = document.querySelector(".right")
const test = document.querySelector(".test")
const first = document.querySelectorAll(".first")
const second = document.querySelectorAll(".second")
let index = 2.5;
let isTransition = false;
slider.style.transform = `translateX(${(-2.5 * 100) / 9}%)`;

let timerID = null;

const slideImg = () => {
    if (isTransition) return;
    if (index === 5.5) {
        index = 2.5;
        slider.style.transition = "none";
        slider.style.transform = `translateX(${(-index * 100) / 9}%)`;
    }
    index++;
    slider.style.transition = "transform 0.8s ease-in-out";
    slider.style.transform = `translateX(${(-index * 100) / 9}%)`;
}
timerID = setInterval(slideImg, 4000);

rightBtn.addEventListener('click', () => {
    if (isTransition) return;
    index++;
    slider.style.transition = "transform 0.6s ease-in-out";
    slider.style.transform = `translateX(${(-index * 100) / 9}%)`;
    clearInterval(timerID);
    timerID = setInterval(slideImg, 4000);
})

leftBtn.addEventListener('click', () => {
    if (isTransition) return;
    index--;
    console.log(index);
    slider.style.transition = "transform 0.6s ease-in-out";
    slider.style.transform = `translateX(${(-index * 100) / 9}%)`;
    clearInterval(timerID);
    timerID = setInterval(slideImg, 4000);
})

slider.addEventListener("transitionend", () => {
    if (index === 5.5) {
        index = 2.5;
        slider.style.transition = "none";
        slider.style.transform = `translateX(${(-index * 100) / 9}%)`;
    } else if (index === 1.5) {
        index = 4.5;
        slider.style.transition = "none";
        slider.style.transform = `translateX(${(-index * 100) / 9}%)`;

    }
    isTransition = false;
})

slider.addEventListener("transitionstart", () => {
    isTransition = true;
})




// if (isTransition) return;
// index++;
// if (index === 5.5) {
//     index = 2.5;
//     slider.style.transition = "none";
//     slider.style.transform = `translateX(${(-index * 100) / 9}%)`;
// }

// document.addEventListener('DOMContentLoaded', function () {

//     let timerID;

//     const slideImg = () => {
//         if (isTransition) return;
//         index++;
//         if (index === 5.5) {
//             index = 2.5;
//             slider.style.transition = "none";
//             slider.style.transform = `translateX(${(-index * 100) / 9}%)`;
//         }

//         // document.onload = function () { myFunction() };
//         slider.style.transition = "transform 0.8s ease-in-out";
//         slider.style.transform = `translateX(${(-index * 100) / 9}%)`;

//         console.log('6sec ungurluu');
//     }
//     // function myFunction() {
//     //     console.log('my func');
//     //     cancel();

//     // }


//     timerID = setInterval(slideImg, 4000);

//     // function cancel() {
//     //     window.clearInterval(timerID);
//     //     console.log('Duusgaw');
//     // }

//     // document.getElementById('cancel').addEventListener('click', cancel, false);
// }, false);


// const timerID = setInterval(() => {
//     if (isTransition) return;
//     if (index === 5.5) {
//         index = 2.5;
//         slider.style.transition = "none";
//         slider.style.transform = `translateX(${(-index * 100) / 9}%)`;
//     }
//     index++;
//     slider.style.transition = "transform 0.8s ease-in-out";
//     slider.style.transform = `translateX(${(-index * 100) / 9}%)`;
// }, 5000)
