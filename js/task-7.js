const getFontSize = document.querySelector('#font-size-control');
const getTitle = document.querySelector('#text');

getFontSize.addEventListener('input', changeOfSize);

function changeOfSize(event) {

    getTitle.style.fontSize = event.target.value + 'px';
    
};