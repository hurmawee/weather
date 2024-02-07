function removeComponent(el) {
 findLine = document.querySelector(".findLine")
 el.parentElement.classList.add("invisible")

 setTimeout(function () {
     el.parentElement.parentElement.remove()
     save();
     counter--;
     localStorage.setItem("counter", counter)
     if (!counter) {
         findLine.classList.add("start")
         save();
     }
 }, 800)

}