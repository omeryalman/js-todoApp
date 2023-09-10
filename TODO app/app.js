const inputWrapper =document.querySelector('.inputWrapper');
const textAreaWrapper=document.querySelector('.textAreaWrapper');
const buttonWrapper=document.querySelector('.buttonWrapper');

const secondHalf = document.querySelector('.halfWrapper .half:nth-child(2)');



const createTodo=(e)=>{

    e.preventDefault();
    if(inputWrapper.value.trim()===''){
        alert("lütfen bir değer girin");
        return;
    }

   const todos=document.createElement('div');
   todos.classList.add('newTodos')

   const taskText=document.createElement('p');
   taskText.textContent=inputWrapper.value.charAt(0).toUpperCase()+inputWrapper.value.slice(1);

const deleteIkon=document.createElement('button');
deleteIkon.classList.add('deleteIcon')
deleteIkon.innerHTML='Delete';

const editIkon=document.createElement('button');
   editIkon.classList.add('editIcon');
   editIkon.innerHTML='Edit';
   const icons=document.createElement('div');
   icons.classList.add("icons");
   
   deleteIkon.addEventListener('click',()=>{
    todos.remove();
   });
   editIkon.addEventListener('click',()=>{
   const editInput=document.createElement('input');
   editInput.classList.add("editInput");
   const editButton=document.createElement('button');
   editButton.classList.add("editButton");
  editButton.innerHTML='Edit'  

   editInput.classList.add('editInput')
   editInput.value=taskText.textContent;
   editIkon.remove();
   deleteIkon.remove();
   todos.appendChild(editInput)
   todos.appendChild(editButton)

   editButton.addEventListener('click',()=>{
    taskText.textContent=editInput.value.charAt(0).toUpperCase()+editInput.value.slice(1);
    editButton.remove();
    editInput.remove();
    todos.appendChild(taskText)
    icons.appendChild(editIkon)
   icons.appendChild(deleteIkon)
   todos.appendChild(icons)

}) 
  
   
   })
    todos.appendChild(taskText)
    icons.appendChild(editIkon)
   icons.appendChild(deleteIkon)

   todos.appendChild(icons)
   secondHalf.appendChild(todos)
   inputWrapper.value=''
}

buttonWrapper.addEventListener('click',createTodo);
