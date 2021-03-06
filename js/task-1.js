const allElements = document.querySelectorAll('.item');
console.log(`В списке ${allElements.length} категории.`);

const lists = [...allElements];

lists.forEach (list => {
    console.log(`Категория:`, list.firstElementChild.textContent);
    console.log(`Количество элементов:`, list.lastElementChild.children.length);
});