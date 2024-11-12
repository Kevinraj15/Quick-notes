let create = document.querySelector(".create");
let createBox = document.querySelector(".createBox");
let notes = document.querySelector(".notes");
let userInput = document.getElementById("userInput");

let i = 0;


function displayTextBox() {
    createBox.style.display = "block";
    userInput.focus(); 
}

create.addEventListener("click", displayTextBox);


userInput.addEventListener("keydown", function (e) {
    if (e.keyCode == 13 && !e.shiftKey) { 
        e.preventDefault(); 
        divStyle(userInput.value); 
        userInput.value = ""; 
        createBox.style.display = "none"; 
    }
});

function color() {
    let randomColors = ["red", "green", "blue", "white", "purple", "orange", "yellow", "orangered","pink","navy"];
    if (i > randomColors.length - 1) {
        i = 0;
    }
    return randomColors[i++];
}

function divStyle(text) {
    let div = document.createElement("div");
    div.className = 'note';
    div.innerHTML = `<div class="details">${text}<h3></h3></div>`; // Fixed class assignment

    div.addEventListener("dblclick", function () {
        div.remove();
    });

    div.setAttribute("style", "background:" + color() + ";");

    notes.appendChild(div);
}
