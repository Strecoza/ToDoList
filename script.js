const inputField=document.querySelector('.inputField');
const btn=document.querySelector('.btn');
const toDoContainer=document.querySelector('.toDoContainer');

btn.addEventListener('click', () => {
    const item=document.createElement('li');
    item.innerText=inputField.value.trim();
    
    
    if (inputField.value.trim().length===0){
        return false;
    }
   
    

    item.classList.add('toDoAdded');
    toDoContainer.appendChild(item);
    inputField.value='';

    item.addEventListener('click', function(){
        item.classList.add('toDoCompleted')
    })

    item.addEventListener('dblclick', function(){
        toDoContainer.removeChild(item)
    })
})