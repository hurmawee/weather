let cardStart
let cardIn
let zoneStart
let zoneIn

let zones =document.querySelectorAll(".zoneCard")
let cards =document.querySelectorAll(".card")
zones.forEach(zone =>{
    zoneDrag(zone)
})
cards.forEach(card =>{
    cardDrag(card)
})

function zoneDrag(zone) {

        zone.addEventListener("dragover", dragOver)
        zone.addEventListener("dragenter", dragEnter)
}
function cardDrag(card) {

        card.addEventListener("dragstart", dragStart)
        card.addEventListener("dragend", dragEnd)
        card.addEventListener("drop", dragDrop)
}
function dragEnter(){
    zoneIn=this

    if (zoneIn !== zoneStart)
    {
        cardIn =  document.createElement("div")
        cardIn.classList.add("card")
        cardIn.setAttribute("draggable", "true")
        cardIn.innerHTML = this.firstChild.innerHTML
        zoneIn.removeChild(zoneIn.firstChild)
        zoneStart.appendChild(cardIn)
        cardDrag(cardIn)
        zoneStart.classList.remove("hover")
        zoneIn.classList.add("hover")
        zoneStart = zoneIn
        save()
    }

}
function dragOver(event){
    event.preventDefault()
}

function dragStart(){
    cardStart =  document.createElement("div")
    cardStart.classList.add("card")
    cardStart.setAttribute("draggable", "true")
    cardStart.innerHTML = this.innerHTML


    zoneStart = this.parentElement

    zoneStart.classList.add("hover")
    setTimeout(function (){
        zoneStart.removeChild(zoneStart.firstChild)
        save()
    }, 0)
}
function dragEnd() {
    if (zoneIn.innerHTML === "") {
        zoneStart.appendChild(cardStart)
        cardDrag(cardStart)
        zoneStart.classList.remove("hover")
        save()
    }
}
function dragDrop() {
    if (zoneIn.innerHTML === "") {
        zoneIn.appendChild(cardStart)
        cardDrag(cardStart)
        zoneIn.classList.remove("hover")
        save()
    }
}