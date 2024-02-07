let container = document.querySelector(".container")

if(localStorage.getItem("current")){
    container.innerHTML = localStorage.getItem("current")
    find()
}

function save(){
    localStorage.setItem("current", container.innerHTML)
}
