const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if(inputBox.value === "") {
        alert("You must type Something"); // alert for type something before clicking add buttton 
    } 
    else {
        let li = document.createElement("li"); // to put value 
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span"); // to create element
        span.innerHTML = "\u00d7";  // corss code u00d7
        li.appendChild(span); // display the cross.
    }

    inputBox.value = ""; // to remove state name after search 
    saveData(); // calling local storage to save in localStorage .
}



listContainer.addEventListener("click", function(e) {

    if(e.target.tagName === "LI"){    // if we clicked LI
        e.target.classList.toggle("checked"); // it marked as checked or if there is already checked it will removed automatically as we used toggle .
        saveData();
    }

    else if(e.target.tagName === "SPAN"){ // if target element is span .
        e.target.parentElement.remove();  // parentElement is LI which will removed so task will be delted . 
        saveData();
    }

},false);



function saveData() {
    localStorage.setItem("data", listContainer.innerHTML) // we have to save data so we use data and we have to save data of listContainer.
}



function showTask() {
    listContainer.innerHTML = localStorage.getItem("data"); // display data whenever we open the site again .
}

showTask();

 