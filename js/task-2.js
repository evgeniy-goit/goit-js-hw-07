const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsContainer = document.querySelector('#ingredients');

const lists = ingredients.map(list => {
    const elementsLi = document.createElement('li'); 
    elementsLi.textContent = list;

    return elementsLi;
})

ingredientsContainer.append(...lists);

console.log(ingredientsContainer);

