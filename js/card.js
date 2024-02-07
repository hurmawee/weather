const RATIOPRESSURE=0.750064;

async function updateCard(card){
    const name = card.querySelector(".name").innerHTML
    let param = await apiRequst(name)

    let weatherImage = card.querySelector(".weather_img")
    weatherImage.src = getImage(param[8])
    let temp = card.querySelector(".temp")
    temp.innerHTML = param[2] + "°"
    let temp_feel = card.querySelector(".feel_temp")
    temp_feel.innerHTML = param[3] + "°"
    let weather = card.querySelector(".weather")
    weather.innerHTML = param[1]
    let humidity = card.querySelector(".humidity")
    humidity.innerHTML = param[5] + "%"
    let pressure = card.querySelector(".pressure")
    pressure.innerHTML = Math.floor(param[4] * RATIOPRESSURE) + " мм рт ст"
    let wind = card.querySelector(".wind")
    wind.innerHTML = param[6] + " м/с"
    let windDirectImage = card.querySelector(".directionImage")
    windDirectImage.style.transform = 'rotate(' + (param[7]-180) + 'deg )'
    let windDirect = card.querySelector(".direction")
    windDirect.innerHTML = getDirection(param[7])
}

async function createCard(city) {
    findLine = document.querySelector(".findLine")
    cardHolder = document.querySelector(".cardHolder")

    let param =  await apiRequst(city)
    if (param===404)
        return "error 404"
    counter++;
    localStorage.setItem("counter",counter)

    var card = document.createElement("div")
    card.classList.add("card", "invisible")
    card.setAttribute("draggable", "true")

    let name = document.createElement("span")
    name.classList.add("name")
    name.innerHTML = param[0]
    card.appendChild(name)

    let del_img = document.createElement("img")
    del_img.classList.add("del_img")
    del_img.src = "img/del.svg"
    del_img.alt = "×"
    del_img.setAttribute("onclick", "removeComponent(this)")
    card.appendChild(del_img)

    let weatherImage = document.createElement("img")
    weatherImage.classList.add("weather_img")
    weatherImage.src = getImage(param[8])
    weatherImage.alt = "картинка погоды"
    card.appendChild(weatherImage)

    let temp = document.createElement("span")
    temp.classList.add("temp")
    temp.innerHTML = param[2] + "°"
    card.appendChild(temp)

    let temp_feel = document.createElement("span")
    temp_feel.classList.add("feel_temp")
    temp_feel.innerHTML = param[3] + "°"
    card.appendChild(temp_feel)

    let weather = document.createElement("span")
    weather.classList.add("weather")
    weather.innerHTML = param[1]
    card.appendChild(weather)

    let humidityImage = document.createElement("img")
    humidityImage.classList.add("icon")
    humidityImage.src = "img/water.svg"
    humidityImage.alt = "Влажность: "
    card.appendChild(humidityImage)

    let humidity = document.createElement("span")
    humidity.classList.add("humidity")
    humidity.innerHTML = param[5] + "%"
    card.appendChild(humidity)

    let pressureImage = document.createElement("img")
    pressureImage.classList.add("icon")
    pressureImage.src = "img/barometer.svg"
    pressureImage.alt = "Давление: "
    card.appendChild(pressureImage)

    let pressure = document.createElement("span")
    pressure.classList.add("pressure")
    pressure.innerHTML = Math.floor(param[4] * RATIOPRESSURE) + " мм рт ст"
    card.appendChild(pressure)

    let windImage = document.createElement("img")
    windImage.classList.add("icon")
    windImage.src = "img/white-windy.svg"
    windImage.alt = "Ветер: "
    card.appendChild(windImage)

    let wind = document.createElement("span")
    wind.classList.add("wind")
    wind.innerHTML = param[6] + " м/с"
    card.appendChild(wind)

    let windDirectImage = document.createElement("img")
    windDirectImage.classList.add("icon", "directionImage")
    windDirectImage.src = "img/arrow.svg"
    windDirectImage.alt = "Направление: "
    windDirectImage.style.transform = 'rotate(' + (param[7]-180) + 'deg )'
    card.appendChild(windDirectImage)

    let windDirect = document.createElement("span")
    windDirect.classList.add("direction")
    windDirect.innerHTML = getDirection(param[7])
    card.appendChild(windDirect)

    let zoneCard = document.createElement("div")
    zoneCard.classList.add("zoneCard")
    zoneCard.appendChild(card)

    cardHolder.appendChild(zoneCard)

    zoneDrag(zoneCard)
    cardDrag(card)

    setTimeout(function () {
        card.classList.remove("invisible");
        findLine.classList.remove("start");
        save()
    }, 400)
    setInterval(function() {updateCard(card)},10000)

}