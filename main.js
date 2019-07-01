/*Task-ify*/
/* add eventlistener to add button */
document.querySelector(".add").addEventListener('click', function() {
let taskValue = document.querySelector('#taskValue').value;
if (taskValue) {
    addItem(taskValue);
    document.querySelector('#taskValue').value="";
}}
);

let parentList = document.querySelector('#todoParent');

/* delete Function*/
function deleteTask() {
    let delChild = this.parentNode.parentNode;
    let delParent = delChild.parentNode;
    delParent.removeChild(delChild);
}

/* complete function */
function addComplete() {
    let compclicked = this;
    let compChild = this.parentNode.parentNode;
    /* */
    let compParent = document.getElementById("completeParent");
    compParent.appendChild(compChild);
    compclicked.className = 'reverse';

    /* reverse activate */
    console.log('reverse activated');
    let reverseBtn = document.querySelectorAll(".reverse");
   reverseBtn.forEach( element => {
    element.addEventListener('click', reverse);
}
);
}

function reverse() {
    let revrclicked = this;
    let reverseChild = this.parentNode.parentNode;
    let todoParent = document.getElementById("todoParent");
    todoParent.appendChild(reverseChild);
    revrclicked.className = 'complete';

    addAgain();
}

function addAgain() {
    console.log("add again");
     
    let againBtn = document.querySelectorAll(".complete");
    console.log(againBtn);  
   
    againBtn.forEach(element => {
        element.removeEventListener('click', reverse);
        element.addEventListener('click', addComplete);
        console.log(element);
    });
}

/*Add Items */
function addItem(taskValue) {
    /* create a tags*/
    let list = document.createElement('li');
    let span = document.createElement('span');

    /* add span to li */
    let content = document.createTextNode(taskValue);
    span.appendChild(content);
    span.className = 'taskItem';
    list.appendChild(span);

    /* append the parent */
    parentList.appendChild(list);
    console.log(parentList);

    /* Button Divs */
    let divParent = document.createElement('div');
    let divOne = document.createElement('div');
    let divTwo = document.createElement('div');

    /* Adding CSS to button */
    divParent.className = "icons";
    divOne.className = "complete";
    divTwo.className = "delete";
        
    /* Appending Buttons */
    divParent.appendChild(divOne);
    divParent.appendChild(divTwo);
    /* Append parent button */
        
    list.appendChild(divParent);

    /* delete btn */
    let deleteBtn = document.querySelectorAll(".delete");

    /* delete Item */
    deleteBtn.forEach(element => {
        element.addEventListener('click', deleteTask);
    });

       /* adding Todo to Completed (Complete & Delete)*/
   let completeBtn = document.querySelectorAll(".complete");

   completeBtn.forEach( element => {
       element.addEventListener('click', addComplete);
   }
   );
}
