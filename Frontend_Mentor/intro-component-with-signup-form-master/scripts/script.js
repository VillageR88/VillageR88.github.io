var Grayish_Blue = "hsl(246, 25%, 77%)";

const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const emailAddress = document.getElementById('emailAddress');
const password = document.getElementById('password');
const field1 = document.getElementsByClassName("field1")[0];
const field2 = document.getElementsByClassName("field2")[0];
const field3 = document.getElementsByClassName("field3")[0];
const field4 = document.getElementsByClassName("field4")[0];
const error1 = document.getElementsByClassName("errorIcon1")[0];
const error2 = document.getElementsByClassName("errorIcon2")[0];
const error3 = document.getElementsByClassName("errorIcon3")[0];
const error4 = document.getElementsByClassName("errorIcon4")[0];
const errorMessage1 = document.getElementsByClassName("errorMessage1")[0];
const errorMessage2 = document.getElementsByClassName("errorMessage2")[0];
const errorMessage3 = document.getElementsByClassName("errorMessage3")[0];
const errorMessage4 = document.getElementsByClassName("errorMessage4")[0];
const myPopup = document.getElementById('myPopup');

function resetFirstName() {
    error1.style.visibility = 'hidden';
    firstName.style.border = `solid 1px ${Grayish_Blue}`;
    errorMessage1.style.display = "none";
}

function checkFirstName() {
    if (firstName.value !== "") {
        error1.style.visibility = 'hidden';
        firstName.style.border = `solid 1px ${Grayish_Blue}`;
        errorMessage1.style.display = "none";

    } else {
        error1.style.visibility = 'visible';
        firstName.style.border = "solid 2px red";
        errorMessage1.style.display = "flex";
    }
}

function resetLastName() {
    error2.style.visibility = 'hidden';
    lastName.style.border = `solid 1px ${Grayish_Blue}`;
    errorMessage2.style.display = "none";
}

function checkLastName() {
    if (lastName.value !== "") {
        error2.style.visibility = 'hidden';
        lastName.style.border = `solid 1px ${Grayish_Blue}`;
        errorMessage2.style.display = "none";

    } else {
        error2.style.visibility = 'visible';
        lastName.style.border = "solid 2px red";
        errorMessage2.style.display = "flex";
    }
}

function isValidEmail(email) {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(email);
}

function checkEmail() {
    if (isValidEmail(emailAddress.value) || emailAddress.value === "") {
        error3.style.visibility = 'hidden';
        emailAddress.style.border = `solid 1px ${Grayish_Blue}`;
        errorMessage3.style.display = "none";
    } else {
        error3.style.visibility = 'visible';
    }
}

function resetPassword() {
    error4.style.visibility = 'hidden';
    password.style.border = `solid 1px ${Grayish_Blue}`;
    errorMessage4.style.display = "none";
}

function checkPassword() {
    if (password.value !== "") {
        error4.style.visibility = 'hidden';
        password.style.border = `solid 1px ${Grayish_Blue}`;
        errorMessage4.style.display = "none";

    } else {
        error4.style.visibility = 'visible';
        password.style.border = "solid 2px red";
        errorMessage4.style.display = "flex";
    }
}

function submit() {
    checkFirstName();
    checkLastName();
    checkPassword();

    if (isValidEmail(emailAddress.value)) {
        errorMessage3.style.display = "none";
        emailAddress.style.border = `solid 1px ${Grayish_Blue}`;
    }
    else {
        errorMessage3.style.display = "flex";
        emailAddress.style.border = "solid 2px red";
        error3.style.visibility = 'visible';
    }

    if ((firstName.value !== "") && (lastName.value !== "") && (isValidEmail(emailAddress.value) || (emailAddress.value === "")) && (password.value !== "")) {
        document.getElementById('myPopup').style.display = 'flex';
    }

}