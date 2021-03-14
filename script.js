const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const modal = document.getElementById('modal_container');
const close = document.getElementById('close');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

close.addEventListener('click', () => {
    modal.classList.remove('show');
    location.reload();
})


function checkInputs() {
    // get the values from the inputs
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    var isValid = true;

    if(usernameValue === '') {
        // show error
        // add error class
        setErrorFor(username, "Username cannot be blank");
        isValid = false;
    } else {
        // add success class
        setSuccessFor(username);
        isValid = true;
    }

    if(emailValue === '') {
        setErrorFor(email, "Email cannot be blank");
        isValid = false;
    } else if(!isEmail(emailValue)) {
        setErrorFor(email, "Email is not valid");
        isValid = false;
    } else {
        setSuccessFor(email);
        isValid = true;
    }

    if(passwordValue === '') {
        setErrorFor(password, "Password cannot be blank");
        isValid = false;
    } else {
        setSuccessFor(password);
        isValid = true;
    }

    if(password2Value === '') {
        setErrorFor(password2, "Password2 cannot be blank");
        isValid = false;
    } else if(passwordValue !== password2Value) {
        setErrorFor(password2, "Passwords does not match");
        isValid = false;
    } else {
        setSuccessFor(password2);
        isValid = true;
    }

    // show a success message
    if(isValid) {
        callModal(modal);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement; // .form-control
    const small = formControl.querySelector('small');

    // add error message inside small
    small.innerText = message;

    // add error class
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement; // .form-control
    formControl.className = 'form-control success';
}

function isEmail(email) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function callModal(modal) {
    modal.classList.add('show');
}