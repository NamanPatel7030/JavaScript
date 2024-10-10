const form = document.querySelector('form');
const input = document.querySelector('#dogName');
const list = document.querySelector('#dogList');


form.addEventListener('submit',function(event) {
    
    const dog = input.value;
    const newLi = document.createElement('li');
    newLi.innerHTML = dog;
    list.append(newLi);


})
