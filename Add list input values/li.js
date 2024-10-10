// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
const inputName = document.querySelector('#product');
const inputQty = document.querySelector('#qty');
const list = document.querySelector('#list');

form.addEventListener('submit',function(event){
    event.preventDefault();
    const itemValue = inputName.value;
    const itemQty = inputQty.value;
    
    const newLi = document.createElement('li');
    const allItemQty = `${itemQty} ${itemValue}`;
    
    newLi.innerHTML = allItemQty;
    list.appendChild(newLi);
    form.reset();
    
    
})