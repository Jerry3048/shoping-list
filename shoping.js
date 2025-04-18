var input = document.getElementsByTagName("input")[0];
var enter = document.getElementsByTagName("button")[0];
var clear = document.getElementsByTagName("button")[1];
var list = document.getElementById("list");
let delete_dutton = document.getElementById("delete");



function updatelist(){
    var li= document.createElement("li");
    var div = document.createElement("div");

    div.style.display = "flex";
    div.style.justifyContent = "space-between";
    div.style.alignItems = "center";
    div.style.width = "90%";

    var button = document.createElement("button");
    button.style.fontSize = "30px";
    var icon = document.createElement("i");
    icon.classList.add('fas', 'fa-trash');
    button.appendChild(icon);  
    button.style.backgroundColor = "dimgray";

    div.appendChild(document.createTextNode(input.value));
    div.appendChild(button);
    li.appendChild(div);
    list.appendChild(li);
    input.value = ""

    button.addEventListener("click",function(){
        li.remove();
    })

    delete_dutton.addEventListener("click", function() {
        const listItems = document.querySelectorAll("#list li");
        listItems.forEach(function(li) {
            li.remove();
        });  
    })

}

function additemafterclick(){
    if (input.value.length > 0){
        updatelist();
    }
}

function additemafterkeypress(){
    if (input.value.length > 0 && event.keyCode === 13) {
        updatelist();
    }
}    

enter.addEventListener("click" , additemafterclick);
input.addEventListener("keypress", additemafterkeypress);


clear.addEventListener("click", function(){
    list.innerHTML = "";
})
