// seting global variables

let addToDoButton = document.getElementById("add-item");
let toDoContainer = document.getElementById("toDoContainer");
let inputField = document.getElementById("inputField");

let arrayOfTasks = [];

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

}

const addToDoTaskToArray = (value) => {
  let newlyCreatedTask = new ToDoTask(value);
  arrayOfTasks.push(newlyCreatedTask);
}

addToDoTaskToArray('Say Hi');
console.log(arrayOfTasks);

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
// Global variable declarations that might be helpful for all our functions

//const cardAllTasks = document.getElementById('card');


// A task number generator - relevant for the add task function but in consequence also for the read function.
// The simple function just takes the length of the Array increments it by one if it is greater than or equal to 1 otherwise it 
// returns 1 (because the Array has to be empty). This way the task numbers start with 1 instead of the array index of 0.
// In the process of the add function (Cris) this 'nextToGenerateTaskNumber' can then 
// be assigned as the value to the object's key 'task-number' (e.g.: testArray[nextToGenerateTaskNu-1].task-number = currentTaskNumber) AND 
// it can be used to either dynamically add a `data-id="${nextToGenerateTaskNumber}"` to the task's html element (e.g. the div that contains the whole task)
// OR in almost the same way it can be used to dynamically set an html id attribute with the value of the nextToGenerateTaskNumber to that html element in order
// to address and retrieve the element later with the read function.




// First attempt at writing a read function aka retrieve function. -> Work in Progress... Currently it only returns the task object when a task number is manually entered. I will attach it to an event listener when we are further along with our code.


// let selectedTask = document.getElementById('placeholderplaceholderplaceholder */)  // placeholder is the place for function that will listen for a click on each of the divs with the individual tasks. I Have to work on that. 


// const read = (selectedTask) => {
//   return testArray[selectedTask];
// }

// simple test of the read function

//console.log(read(4));


// add a new task function -------- Cris ----------



let addToDoButton = document.getElementById("add-item");
let toDoContainer = document.getElementById("toDoContainer");
let inputField = document.getElementById("inputField");
/* 
addToDoButton.addEventListener("click", function () {
  let task = document.createElement("label");
  task.classList.add("text");
//  let testTaskInput = inputField.value;
  task.innerText = inputField.value;
  toDoContainer.appendChild(task);
  inputField.value = "";
  task.addEventListener("click", function () {});
//  addToDoTaskToArray(testTaskInput);
//  console.log(arrayOfTasks);
});
 */

// !!------------- END ADD TASK FUNCTION --------------!!



///////////////////////////////////////////////////////////////////
// ADD list item
//// 1. class commented out
//// 2. AppendChild listitem to ul.


addToDoButton.addEventListener("click", function () {
  let li = document.createElement("li");
  li.classList.add('toDoParent');
  li.innerHTML = `<input type="checkbox" name="checkbox" value=" item._id" onchange="this.form.submit()"><label>${inputField.value}</label> <i class="fas fa-trash-alt trashIcon"></i>`;
  toDoContainer.appendChild(li);
  let trashIcon = document.querySelectorAll('.trashIcon');
  for (let icon of trashIcon){
    icon.addEventListener("click", deleteListItem);
  }
  inputField.value = "";  
});

// ///////////////////////////////////////////////////////////////////
// DELETE list item 


console.log(trashIcon.parentNode);


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


