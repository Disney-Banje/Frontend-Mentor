const initialState = document.querySelector(".selection-slate");
const finalState = document.querySelector(".thankYouSlate");

const ratingDigits = document.querySelectorAll(".rating-digit");
const submit = document.getElementById("submit");
const para = document.querySelector(".choice-preview")
const rateAgain = document.getElementById("rate_again");


ratingDigits.forEach(element => {
    element.addEventListener("click", (evt) => {
        let rating = evt.target.textContent;
        para.childNodes[1].textContent = rating;
    })
})


submit.addEventListener("click", () => {
    initialState.style.display = "none";
    finalState.style.display = "block";

})

rateAgain.addEventListener("click", () => {
    initialState.style.display = "block";
    finalState.style.display = "none";
})