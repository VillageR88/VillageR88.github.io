const input1 = document.getElementById('firstName');
const input2 = document.getElementById('lastName');
const input3 = document.getElementById('emailAddress');
const input4 = document.getElementById('password');

const field3 = document.getElementsByClassName("field3")[0];
const error3 = document.getElementsByClassName("errorIcon3")[0];


function isValidEmail(email) {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(email);
}

function checkEmail() {

    if (input3.value === "") {
        error3.style.visibility = 'hidden';
        //errorMessage.style.visibility = 'hidden';
    }

    if (isValidEmail(input3.value) || input3.value === "") {
        error3.style.visibility = 'hidden';
    } else {
        error3.style.visibility = 'visible';
    }
}

function submit() {
    if (isValidEmail(input3.value)) {
        errorMessage.style.visibility = "visible";
        errorMessage.textContent = "Thank you!";
        errorMessage.style.color = "green";
        field3.style.border = "solid 2px transparent";
    }
    else {
        errorMessage.style.visibility = "visible";
        errorMessage.textContent = "Please provide a valid email";
        errorMessage.style.color = "var(--Soft_Red)";
        field3.style.border = "solid 2px red";
    }
}


//const errorMessage = document.getElementsByClassName("errorMessage")[0];


