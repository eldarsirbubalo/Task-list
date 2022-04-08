var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLength(){
    return
    input.value.length;
}
function listLength(){
    return item.length;
}

function createListElement(){
    var li = document.createElement("li");//creates an elemnt "li"
    li.appendChild(document.createTextNode(input.value));//makes text from input field li text
    ul.appendChild(li);//adds li to ul
    input.value = "";//reset text input field

    function crossOut(){
        li.classList.toggle("done");
    }

    li.addEventListener("click", crossOut);

    //Start add delete button
    var dBtn = document.createElement("button");
    dBtn.appendChild(document.createTextNode("X"));
    li.appendChild(dBtn);
    dBtn.addEventListener("click",deleteListItem);

    //add class delete(display:none)
    function deleteListItem(){
        li.classList.add("delete")
    }
    //end add class delete
}

function addListAfterClick(){
    if (inputLength() > 0) 
    createListElement();
}

function addListAfterKeypress(event){
    if (inputLength() > 0 && event.which === 13)
    createListElement();
}

enterButton.addEventListener("click",addListAfterClick);
input.addEventListener("keypress",addListAfterKeypress);