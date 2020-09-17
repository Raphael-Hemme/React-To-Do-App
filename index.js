// Just a test array we can experiment with and delete when our functions are working

const testArray = [
  {
    'taks-number' : 0001,
    'task-name' : 'Eat all the stuff!',
    'category' : 'morning',
    'status' : 'undone'  
  }, 
  {
    'taks-number' : 0002,
    'task-name' : 'Learn all the Java Scripts',
    'category' : 'evening',
    'status' : 'undone'  
  }, 
  {
    'taks-number' : 0003,
    'task-name' : 'Get even better',
    'category' : 'weekend',
    'status' : 'done'  
  }, 
  {
    'taks-number' : 0004,
    'task-name' : 'Catch a silverfish',
    'category' : 'afternoon',
    'status' : 'done'  
  }, 
  {
    'taks-number' : 0005,
    'task-name' : 'Mark an unfinished task as done',
    'category' : 'morning',
    'status' : 'deleted'  
  }, 
  {
    'taks-number' : 0006,
    'task-name' : 'Find the meaning of life',
    'category' : 'evening',
    'status' : 'done'  
  } 
] 


// First attempt at writing a read function aka retrieve function. -> Work in Progress...
const cardAllTasks = document.getElementById('card');

let selectedTask = document.card.addEventListener('mouseover', /* placeholder */)  // placeholder is the place for function that will listen for a click on each of the divs with the individual tasks. I Have to work on that. 


const read = (selectedTask) => {
  return testArray.taskSelector;
}

let currentlyOpenedTaskObject = read();
