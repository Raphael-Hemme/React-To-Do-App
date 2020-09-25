// Just a test array we can experiment with and delete when our functions are working

const testArray = [
  {
    'task-number' : 1,
    'task-name' : 'Eat all the stuff!',
    'category' : 'morning',
    'status' : 'undone'  
  }, 
  {
    'task-number' : 2,
    'task-name' : 'Learn all the Java Scripts',
    'category' : 'evening',
    'status' : 'undone'  
  }, 
  {
    'task-number' : 3,
    'task-name' : 'Get even better',
    'category' : 'weekend',
    'status' : 'done'  
  }, 
  {
    'task-number' : 4,
    'task-name' : 'Catch a silverfish',
    'category' : 'afternoon',
    'status' : 'done'  
  }, 
  {
    'task-number' : 5,
    'task-name' : 'Mark an unfinished task as done',
    'category' : 'morning',
    'status' : 'deleted'  
  }, 
  {
    'task-number' : 6,
    'task-name' : 'Find the meaning of life',
    'category' : 'evening',
    'status' : 'done'  
  } 
] 

// add a new task function -------- Cris ----------

let addToDoButton = document.getElementById("add-item");
let toDoContainer = document.getElementById("toDoContainer");
console.log(toDoContainer);
let inputField = document.getElementById("inputField");

// !!------------- END ADD TASK FUNCTION --------------!!


addToDoButton.addEventListener("click", function () {
  let li = document.createElement("li");
  li.classList.add('toDoParent');
  li.innerHTML = `<input type="checkbox" name="checkbox" value=" item._id" onchange="this.form.submit()">
  <label class="editFelix" contenteditable ="true">${inputField.value}</label> 
  <i class="fas fa-trash-alt trashIcon" id="trash-icon"></i>
  <button type="button" class="btn btn-secondary edit" id="edit-icon">edit</button>
 
  `;
  toDoContainer.appendChild(li);

  let trashIcon = document.querySelectorAll('.trashIcon');
  for (let icon of trashIcon){
    icon.addEventListener("click", deleteListItem);
  }
  inputField.value = "";  
});

// ///////////////////////////////////////////////////////////////////
// DELETE list item 

// console.log(trashIcon.parentNode);


function deleteListItem (e) {

  const parent = e.currentTarget.closest('.toDoParent');
  //console.log(parent);
  toDoContainer.removeChild(parent);
  // let firstParentNode = e.target.parentNode;
  // let grandParentNode = firstParentNode.parentNode;
  // grandParentNode.removeChild(firstParentNode);
  // console.log(e.currentTarget);
}


  ///////////////////////////////////////////////////////////////////
 // CLEAR => reset function

  let reset = document.querySelector(".refresh");
  function resetList (e) {
  toDoContainer.innerHTML = "";
}

reset.addEventListener("click", resetList);



  const myDB = [ ];
  const index = ''; 
  const  todoItemLists = document.querySelectorAll('#toDoContainer li');
   console.log(todoItemLists);  
   console.log(myDB);   
 

class Todo {

  constructor(todoItem){
     this.todoItem = todoItem;
    //  this.id = id;
  //   this.done = done;
  }
}

// ----add event listners------------

class UI {

  

   displayDate() { 

    let divBox = document.querySelector(".clockDate");
    console.log(divBox);

              //---create--div-------
              const newDiv = document.createElement('div')
              console.log(newDiv)

              newDiv.className = "well"

              newDiv.innerHTML = `
              ${this.getDate()}
              `
      divBox.appendChild(newDiv);

    }

         //----add clock function

         getDate(){

          let time = new Date();
  
          let options = {
              
              weekday: 'long',
              time: 'numeric',
      
             };
      
             let currentTime = time.toLocaleTimeString('en-US', options);
             return currentTime;
      
         }
    
  
       editTodoItem(target){

        console.log('do edit');
        //----traverse to parent node  //---------for todoLIst listItem
        let todoLIst = this.parentNode; 
        let editInput = todoLIst.querySelector("input[type=text]");
        let label = todoLIst.querySelector("label");
        let containsClass = todoLIst.classList.contains("editMode");
        
        if (containsClass) {
            label.innerText = editInput.value;
        } else {
            editInput.value = label.innerText;
        }
        todoLIst.classList.toggle("editMode");
         
    
    }
     //
  
     joinTaskEvents( ) {
      // select listitems chidlren
      let checkBox = taskListItem.querySelector('input[type="checkbox"]');
      let editButton = taskListItem.querySelector("button.edit");
      let deleteButton = taskListItem.querySelector("button.delete");
      //bind editTask to edit button
      editButton.onclick = editTask;
      //bind deleteTask to delete button
      deleteButton.onclick = deleteTask;
      //bind checkBoxEventHandler to checkbox
      checkBox.onchange = checkBoxEventHandler;
  }

    // creating new tasks on each edit
    editTask(){
      
        // create List Item
        // let todoLIst = document.createElement("li");
        // // input checkbox
        // let checkBox = document.createElement("input");
        // // label
        // let label = document.createElement("label");
        // // input (text)
        // let editInput = document.createElement("input");
        // button.edit
        let editButton = document.createElement("button");
    
        // element to modified 
        checkBox.type = "checkBox";
        editInput.type = "text";
        editButton.innerText = "Edit";
        editButton.className = "edit";
        todoLIst.appendChild(checkBox);
        todoLIst.appendChild(label);
        todoLIst.appendChild(editInput);
        todoLIst.appendChild(editButton);
        todoLIst.appendChild(deleteButton);
        return todoLIst;
     }

}
//---------------innitiate time---------------


const ui = new UI();
//time
 ui.displayDate();
 document.addEventListener("DOMContentLoaded", displayDate());

//Edit event listners for edit todo-----

document.querySelector('#toDoContainer').addEventListener('click',
function (e) {
   
  let parentElement = document.querySelector('#toDoContainer');
  console.log(parentElement);

console.log(parentElement.children);

  const childrenElement = parentElement.children;
  console.log(childrenElement);


     for(i = 0; i <  childrenElement.length; i++)  {
        console.log(childrenElement[i]);
        console.log(childrenElement[i].childNodes);
        console.log(childrenElement[i].childNodes[2]);
        console.log(childrenElement[i].childNodes[2].innerHTML);
        const textNode = childrenElement[i].childNodes[2].innerHTML;

        //--get target element ---!!!remove
        let elementToTarget = document.querySelectorAll('.editFelix');
            console.log(elementToTarget);

	        if (!e.target.matches('.editFelix') && e.target === textNode) return target;
	          console.log(e.target);

        // instantiate UI
        const ui = new UI();
        //edit todo
         ui.editTodoItem(e.target);
     }
     

   e.preventDefault();


});

//-------------event listern for click edit button#

document.querySelector("button.edit").addEventListener('click',
  function (e) { 

    let editButton = document.querySelector("button.edit");

     const ui = new UI();
     //edit todo
      ui.editTask(editButton);
      ui.joinTaskEvent();

      e.preventDefault();

   } );






