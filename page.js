// const FirstName = document.querySelector("#FirstName");
const LastName = document.querySelector("#LastName");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

let submit = document.getElementById("claimButton");

submit.addEventListener("submit", function(event){
    event.preventDefault();

    let isFirstNameValid = checkFirstName(),
    isLastNameValid = checkFirstName(), 
    isEmailValid = checkEmail(), 
    isPasswordValid = checkPassword();

    let isFormValid = isFirstNameValid &&
    isLastNameValid &&
    isEmailValid &&
    isPasswordValid;
})


function errorMessage() {
    let LastError = document.getElementById("#LastError");
    if(LastName === "") {
        LastError.textContent = "Last Name should not be empty!"
        LastError.style.color = "red"
        preventDefault();
    }
}