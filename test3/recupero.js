
var btn = document.getElementById("add");
btn.addEventListener("click", add);


if (localStorage.getItem('task')) {  
    var arrayTask = localStorage.getItem('task').split(",");
} else {
    localStorage.setItem('task', 'prima task');
    var arrayTask = localStorage.getItem('task').split(",");
}


stampa();
function add() {  
    var testo = document.getElementById("testo").value;
    if (testo != "") { 
        arrayTask.push(testo); 

        
        stampa();

        
        localStorage.setItem('task', arrayTask);
        document.getElementById("testo").value = "";
    } else {
        alert("Il campo è vuoto");
    }
}


function remove(i) {
    arrayTask.splice(i, 1);  
    stampa();
    localStorage.setItem('task', arrayTask);
}

function stampa() {
    var ul = document.getElementById("ul");
    ul.innerHTML = ''; 
    for (i = 0; i < arrayTask.length; i++) {
        ul.innerHTML += '<div class="container"><div class="row p-1"><li class="list-group-item col-11">' + arrayTask[i] + '</li><button  type="button" onclick="remove(' + i + ')" class="btnRemove btn btn-danger  col-1">x</button></div></div>';
    };
}