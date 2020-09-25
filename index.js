// seting global variables

let addToDoButton = document.getElementById("add-item");
let toDoContainer = document.getElementById("toDoContainer");
let inputField = document.getElementById("inputField");




// Use a parent / super class


//let nextToGenerateTaskNumber = generateTaskNumberForNewTask();
//const generateTaskNumberForNewTask = () => {
//  if (testArray.length >= 1) {
//    return testArray.length +1;
//  } else {
//    return 1;
//  }
//}

class ToDoTask {
  constructor (taskContent) {
    this.taskContent = taskContent;
    this.status = ''; 
  }
  markAsDone (event) {
    const parent = event.currentTarget.closest('li');
    if (!this.status) {
      this.status='done';
      parent.children[1].classList.toggle("mark-done");
    } else {
      this.status='';
      parent.children[1].classList.toggle("mark-done");
    };
  }
  deleteListItem (e) {
    const myList = e.currentTarget.closest('.toDoParent');
    //console.log(parent);
    toDoContainer.removeChild(myList);
    // let firstParentNode = e.target.parentNode;
    // let grandParentNode = firstParentNode.parentNode;
    // grandParentNode.removeChild(firstParentNode);
   // console.log(e.currentTarget);
  }

}

class ToDoList {
  constructor () {
    this.allTasks = [];
  }
  
/////////////   Add to the DOM - Cristiani
  createTask () { 
    let li = document.createElement("li");
    li.classList.add('toDoParent');
    li.innerHTML = `<input type="checkbox" name="checkbox" value=" item._id"><label>${inputField.value}</label> <i class="fas fa-trash-alt trashIcon"></i>`;
    toDoContainer.appendChild(li);
    ////   Add trash icon to every added task and add event listener to it (part of delete function - Teresa)
      const newTask = this.addTask(inputField.value);
    inputField.value = "";
    
    let trashIcon = document.querySelectorAll('.trashIcon');
    for (let icon of trashIcon){
      icon.addEventListener("click", newTask.deleteListItem);
    }
  
    ////   Add checkbox to every added task and add event listener to it (part of mark-as-done func. - Raphael)
    let checkBox = document.querySelectorAll('input[type="checkbox"]');
    for (let box of checkBox){
      box.addEventListener("change", newTask.markAsDone);
    };
  }  

/////////////   Add to the Array
  addTask (value) { 
  let newlyCreatedTask = new ToDoTask(value);
  this.allTasks.push(newlyCreatedTask);
  console.log(this.allTasks);
  return newlyCreatedTask
  }

/////////////   Mark as Done 

}

/// t´just to test
const myList = new ToDoList();

//addToDoTaskToArray('Say Hi');
//console.log(arrayOfTasks);

// Just a test array we can experiment with and delete when our functions are working
/*
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
*/

//const cardAllTasks = document.getElementById('card');



// First attempt at writing a read function aka retrieve function. -> Work in Progress... Currently it only returns the task object when a task number is manually entered. I will attach it to an event listener when we are further along with our code.



// const read = (selectedTask) => {
//   return testArray[selectedTask];
// }

// simple test of the read function

//console.log(read(4));




///////////////////////////////////////////////////////////////////
// ADD list item
//// 1. class commented out
//// 2. AppendChild listitem to ul.


addToDoButton.addEventListener("click", myList.createTask.bind(myList));

// ///////////////////////////////////////////////////////////////////
// DELETE list item 


//console.log(trashIcon.parentNode);








///////////////////////////////////////////////////////////////////
// CLEAR => reset function

let reset = document.querySelector(".refresh");
function resetList (e) {
  toDoContainer.innerHTML = "";
}

reset.addEventListener("click", resetList);


