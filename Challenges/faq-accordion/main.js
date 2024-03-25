// initialization of UI elements being used.

const buttons = document.querySelectorAll("button"); // for all the buttons in the document.
const articles = document.querySelectorAll("article"); // all articles in the document.
const tagContent = document.querySelectorAll("p.tag_content"); // accordion title 


// Adding the event listener for all the buttons in the document
buttons.forEach((button, index) => {  
    button.addEventListener("click", evnt => {
        console.log(evnt);
        buttons.forEach((icon, i) => {
            if (index !== i) {
                icon.classList.remove("clicked");
                articles[i].classList.remove("expand"); // using the principe that the articles are members of the accordion_container nodeList.
                tagContent[i].classList.remove("active");
            }
        });

        button.classList.toggle("clicked");
        articles[index].classList.toggle("expand");
        tagContent[index].classList.toggle("active");
    })
})

const accordion = document.querySelector(".accordion_container");
