const inputBox = document.getElementById("input-box");
const listItem = document.getElementById("list-container");

window.addEventListener('load', showData);

listItem.addEventListener('click',function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle('checked');
        saveDate();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveDate();
    }
});

function addNote(){
    if(inputBox.value === ""){
        alert("You are must write any note")
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listItem.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7'
        li.appendChild(span);
        saveDate();
    }
    inputBox.value = '';
}

function saveDate(){
    localStorage.setItem("data", listItem.innerHTML);
}

function showData(){
    listItem.innerHTML = localStorage.getItem("data");
}

