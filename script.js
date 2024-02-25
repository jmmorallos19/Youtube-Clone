const searchIcon = document.getElementById("searchIcon");
const micIcon = document.getElementById("micIcon");
const createIcon = document.getElementById("createIcon");
const notificationIcon = document.getElementById("notificationIcon");
const tooltip1 = document.querySelector(".tooltip1");
const tooltip2 = document.querySelector(".tooltip2");
const tooltip3 = document.querySelector(".tooltip3");
const tooltip4 = document.querySelector(".tooltip4");


searchIcon.addEventListener('mouseover', () => {
    tooltip1.style.opacity = 1;
})

searchIcon.addEventListener('mouseout', () => {
    tooltip1.style.opacity = 0;
})

micIcon.addEventListener('mouseover', () => {
    tooltip2.style.opacity = 1;
})

micIcon.addEventListener('mouseout', () => {
    tooltip2.style.opacity = 0;
})

createIcon.addEventListener('mouseover', () => {
    tooltip3.style.opacity = 1;
})

createIcon.addEventListener('mouseout', () => {
    tooltip3.style.opacity = 0;
})

notificationIcon.addEventListener('mouseover', () => {
    tooltip4.style.opacity = 1;
})

notificationIcon.addEventListener('mouseout', () => {
    tooltip4.style.opacity = 0;
})


