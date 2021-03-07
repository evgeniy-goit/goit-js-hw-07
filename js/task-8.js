const inputNumberOfBoxes = document.querySelector('[type = "number"]');
const makeBoxes = document.querySelector('[data-action="render"]');
const destroyBox = document.querySelector('[data-action="destroy"]');
const boxesContainer = document.querySelector('#boxes');


let elementaryBoxes = 0;

inputNumberOfBoxes.addEventListener('input', (event) => {
    elementaryBoxes = +event.currentTarget.value;
})

inputNumberOfBoxes.addEventListener('input', () => {
    makeBoxes.addEventListener('click', createBoxes);
});

destroyBox.addEventListener('click', destroyBoxes)

destroyBox.addEventListener('click', () => {
    makeBoxes.removeEventListener('click', createBoxes);});

function createBoxes(quantity) {
    let boxes = [];
    quantity = elementaryBoxes;
    for (let i = 0; i < elementaryBoxes; i += 1) {
const box = document.createElement('div');
box.style.backgroundColor = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
box.style.width = 30 + i * 10 + 'px';
box.style.height = 30 + i * 10 + 'px';
box.classList.add('box');
    boxes.push(box);
}
boxesContainer.append(...boxes);
};

function destroyBoxes() {
    boxesContainer.innerHTML = '';
}