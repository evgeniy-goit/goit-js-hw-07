const decrementButtonRef = document.querySelector('[data-action="decrement"]');
const incrementButtonRef = document.querySelector('[data-action="increment"]');
const valueRef = document.querySelector('#value');

let counterValue = 0;

const increment = () => {
    counterValue += 1;
    valueRef.textContent = counterValue; 
}

const decrement = () => {
    counterValue -= 1;
    valueRef.textContent = counterValue;
}

decrementButtonRef.addEventListener('click', decrement);
incrementButtonRef.addEventListener('click', increment);