const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', onInputData);

function onInputData (event) {
    nameOutput.textContent = event.currentTarget.value;

    if (event.currentTarget.value === "") {
        nameOutput.textContent = "незнакомец";
    }
};