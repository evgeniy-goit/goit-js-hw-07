const refValidationInput = document.querySelector('#validation-input');

refValidationInput.addEventListener('blur', checkInputNumber);

function checkInputNumber (event) {

    if(event.currentTarget.value.length === Number(refValidationInput.dataset.length)) {
        refValidationInput.classList.add('valid');
        refValidationInput.classList.remove('invalid');
    } else {
        refValidationInput.classList.add('invalid');
        refValidationInput.classList.remove('valid');
    }
};