const button = document.querySelector('button');
const popup = document.querySelector('.popup');

button.addEventListener("click", e => {
    // console.log(e.target)
    popup.classList.toggle("hidden");
    button.classList.toggle("active");
})