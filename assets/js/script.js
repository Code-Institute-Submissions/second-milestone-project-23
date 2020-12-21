const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

//Validation for subscribe form
//CREDIT: Validation function implemented with the help from Coding Nepal's tutorial<a href="https://www.youtube.com/watch?v=qGzJtVbXPhY"></a>

const email = document.querySelector("#email");
const icon1 = document.querySelector(".icon1");
const icon2 = document.querySelector(".icon2");
const error = document.querySelector(".error-text");
const btn = document.querySelector("button");
let regExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

function check() {
    if (email.value.match(regExp)) {
        email.style.borderColor = "#27ae60";
        email.style.background = "#eafaf1";
        icon1.style.display = "none";
        icon2.style.display = "block";
        error.style.display = "none";
        btn.style.display = "block";
    } else {
        email.style.borderColor = "#e74c3c";
        email.style.background = "#fceae9";
        icon1.style.display = "block";
        icon2.style.display = "none";
        error.style.display = "block";
        btn.style.display = "none";
    }
    if (email.value == "") {
        email.style.borderColor = "lightgrey";
        email.style.background = "#fff";
        icon1.style.display = "none";
        icon2.style.display = "none";
        error.style.display = "none";
        btn.style.display = "none";
    }
}

// --- END CREDIT ---//
let inputs = document.querySelectorAll("input");

btn.addEventListener("click", (event) => {
    event.preventDefault();
    event.target.textContent = "Subscribed!";

    inputs.forEach(input => input.value = "");
    if (event.target.textContent = "Subscribed!") {
        email.style.borderColor = "lightgrey";
        email.style.background = "#fff";
        icon2.style.display = "none";
        btn.style.background = "#c6a337";
    }
})