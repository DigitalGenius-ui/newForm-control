// grab all needed elements 
const form = document.querySelector("form"),
firstName = document.querySelector(".name"),
lastName = document.querySelector(".last"),
user = document.querySelector(".user"),
email = document.querySelector(".email"),
firstPassword = document.querySelector(".firstPass"),
secondPassword = document.querySelector(".secondPass"),
allInputs = document.querySelectorAll("input");

// form part 
form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkBoxes()
});

// form handler 
function checkBoxes(){
    if(firstName.value === ""){
        errorHandling(firstName, "Please insert your First Name")
    }
    else if(lastName.value === ""){
        errorHandling(lastName, "Please insert your Last Name")
    }
    else if(user.value === ""){
        errorHandling(user, "Please insert your User Name")
    }
    else if(email.value === ""){
        errorHandling(email, "Please insert your Email")
    }
    else if(firstPassword.value === ""){
        errorHandling(firstPassword, "Please insert your Password")
    }
    else if(secondPassword.value === ""){
        errorHandling(secondPassword, "Please re-type your Password")
    }else{
        allInputs.forEach((input) => successHandling(input))
    }
}

function errorHandling(input, text){
    const parentElement = input.parentElement;
    const message = parentElement.querySelector(".error");
    message.innerText = text;
    message.classList.add("active");
    parentElement.classList.add("errorHandling");
}

function successHandling(input){
    const parentElement = input.parentElement;
    const texts = parentElement.querySelector(".error");
    parentElement.classList.add("success");
    if(texts){
        texts.remove();
    }
}