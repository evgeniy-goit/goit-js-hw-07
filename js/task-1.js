const allElements = document.querySelectorAll('.item');
console.log(`В списке ${allElements.length} категории.`);

const list = [...allElements];

console.log(list);