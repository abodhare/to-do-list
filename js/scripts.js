// get relevant data
let enter = document.getElementById("enter");
let input = document.getElementById("user-input");
let list = document.getElementById("items");
let done = document.getElementById("done");
let = document.getElementsByTagName("li");

// create a li and append to list
// li should have delete button and crossout after clicking
function createListItem() {
    // create a li and append value of input to it
    let li = document.createElement("li");
    let text = document.createElement("span");
    text.appendChild(document.createTextNode(input.value));
    li.appendChild(text);
    list.appendChild(li); // add it to items

    input.value = ""; // reset user input

    function taskDone(ul) {
        li.parentNode.removeChild(li);
        ul.appendChild(li);
    }
    
    text.addEventListener("click", () => {
        text.classList.toggle("done");
        if (li.parentElement === list) {
            taskDone(done);
        } else {
            taskDone(list);
        }
    });

    let dbtn = document.createElement("button");
    dbtn.appendChild(document.createTextNode("X"));
    dbtn.addEventListener("click", ()=>{li.classList.add("delete")});
    li.appendChild(dbtn);
}

enter.addEventListener("click", () => {
    if (input.value.length > 0) {
        console.log(input.value);
        createListItem();
    }
});

input.addEventListener("keypress", (key) => {
    if (input.value.length > 0 && key.keyCode === 13) {
        createListItem();
    }
})