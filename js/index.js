let loop
let input
let findLine
let cardHolder


let counter //счетчик карточек
if (localStorage.getItem("counter"))
    counter = localStorage.getItem("counter")
else {
    counter = 0
    localStorage.setItem("counter", counter)
}

find()

function find() {
    input = document.querySelector("input")
    loop = document.querySelector(".inp_img")

    input.addEventListener("keyup", function (e) {
        if (e.key === 'Enter') {
            if (input.value === "") {
                return alert("Вы забыли ввести город")
            }
            createCard(input.value)

        }
    })

    loop.addEventListener("click", function () {
        if (input.value === "") {
            return alert("Вы забыли ввести город")
        }
        createCard(input.value)
    })
}



